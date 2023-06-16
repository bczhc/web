import {Ref, UnwrapRef} from "vue";

// noinspection RegExpRedundantEscape
const EMAIL_REGEXP =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export function validateEmail(email: string) {
    return EMAIL_REGEXP.test(email);
}

export type VueRef<T> = Ref<UnwrapRef<T>>;
