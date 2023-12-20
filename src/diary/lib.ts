import {useI18n} from "vue-i18n";
import {default as axios} from "axios";

export async function fetchMe() {
    let response = await axios.get('/api/diary/me');
    let data = response['data'];
    console.log(data);
    return data;
}

enum BinaryGender {
    Male,
    Female,
}

interface OtherGender {
    value: string,
}

type Gender = BinaryGender | 'Unknown' | OtherGender;

type ServerGender = { tag: string, value?: string }

export interface ServerUserProfile {
    signupTime: number,
    username: string,
    email?: string,
    name?: string,
    gender: ServerGender,
}

export class GenderExt {
    static toServerGender(self: Gender): ServerGender {
        switch (self) {
            case 'Unknown':
                return {tag: 'Unknown'}
            case BinaryGender.Male:
                return {tag: 'Male'}
            case BinaryGender.Female:
                return {tag: 'Female'}
            default:
                return {tag: 'Other', value: self.value}
        }
    }

    static toString(self: Gender) {
        let {t} = useI18n();

        switch (self) {
            case 'Unknown':
                return t('gender_label_unknown');
            case BinaryGender.Male:
                return t('gender_label_male');
            case BinaryGender.Female:
                return t('gender_label_female');
            default:
                return t('gender_label_other', [self.value]);
        }
    }

    static parseServerGender(sg: ServerGender) {
        let gender: Gender;
        switch (sg.tag) {
            case 'Male':
                gender = BinaryGender.Male
                break
            case 'Female':
                gender = BinaryGender.Female
                break;
            case 'Other':
                gender = {
                    value: sg.value!!
                };
                break;
            default:
                gender = 'Unknown';
                break;
        }
        return gender;
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

export const AXIOS_CONFIG_CONTENT_TYPE_JSON = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const AXIOS_CONFIG_CONTENT_TYPE_URL_ENCODED = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

axios.defaults.headers.post['Content-Type'] = AXIOS_CONFIG_CONTENT_TYPE_URL_ENCODED.headers["Content-Type"];
