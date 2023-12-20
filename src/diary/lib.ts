import * as $ from "jquery";
import {useI18n} from "vue-i18n";
import {Logger} from "vite";

export async function fetchMe() {
    return new Promise<object>((x, r) => {
        $.ajax({
            method: 'get',
            async: true,
            url: '/api/diary/me',
            success: data => {
                console.log(data);
                x(data);
            },
            error: e => {
                console.log('error ' + e);
                r(e);
            },
        })
    });
}

enum BinaryGender {
    Male,
    Female,
}

interface OtherGender {
    value: string,
}

type Gender = BinaryGender | 'Unknown' | OtherGender;

export interface UserInfo {
    signup_time: number,
    username: string,
    gender: Gender,
    name?: string,
    email?: string,
}

type RustGender = { tag: string, value?: string }

export function genderToString(gender: Gender) {
    let {t} = useI18n();

    switch (gender) {
        case 'Unknown':
            return t('gender_label_unknown');
        case BinaryGender.Male:
            return t('gender_label_male');
        case BinaryGender.Female:
            return t('gender_label_female');
        default:
            return t('gender_label_other', [gender.value]);
    }
}

export function parseUserInfoJson(json: object): UserInfo {
    let gender: Gender;
    let rustGender = json['gender'] as RustGender;
    switch (rustGender.tag) {
        case 'Male':
            gender = BinaryGender.Male
            break
        case 'Female':
            gender = BinaryGender.Female
            break;
        case 'Other':
            gender = {
                value: rustGender.value!!
            };
            break;
        default:
            gender = 'Unknown';
            break;
    }
    return {
        gender,
        username: json['username'],
        name: json['name'],
        email: json['email'],
        signup_time: json['signupTime'],
    }
}

export function timestampToDateString(timestamp: number) {
    return new Date(timestamp * 1000).toString()
}

export async function delay(millis: number, failed: boolean = false): Promise<void> {
    return new Promise((x, e) => {
        setTimeout(() => {
            if (failed) {
                e()
            } else {
                x()
            }
        }, millis);
    });
}
