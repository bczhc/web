<template>
    <div id="form">
        <n-space vertical justify="center">
            <n-h1 style="text-align: center">Sign up</n-h1>
            <n-input placeholder="Username" id="username-input"
                     v-model:value="username"
                     :status="usernameStatus(username)"
                     :maxlength="MAX_USERNAME_LEN"
            ></n-input>
            <n-input placeholder="Email" id="email-input"
                     v-model:value="email"
                     :status="emailStatus(email)"
            ></n-input>
            <n-input placeholder="Password" id="password-input"
                     v-model:value="password"
                     :status="passwordStatus(password, passwordCheck)"
                     type="password"
                     :maxlength="MAX_PASSWORD_LEN"
            ></n-input>
            <n-input placeholder="Re-enter Password" id="password-check-input"
                     v-model:value="passwordCheck"
                     :status="passwordStatus(password, passwordCheck)"
                     type="password"
                     :maxlength="MAX_PASSWORD_LEN"
            ></n-input>
            <div style="text-align: center;">
                <n-button attr-type="submit" @click="showMessage">Sign up
                </n-button>
            </div>
        </n-space>
    </div>
</template>
<style>
#form {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<script setup lang="ts">
import {ref} from "vue";
import {validateEmail, VueRef} from "../lib.ts";
import {useMessage} from 'naive-ui';

const message = useMessage()

const MIN_PASSWORD_LEN = 1;
const MIN_USERNAME_LEN = 3;
const MAX_USERNAME_LEN = 20;
const MAX_PASSWORD_LEN = 20;

let username: VueRef<string | null> = ref(null);
let email: VueRef<string | null> = ref(null);
let password: VueRef<string | null> = ref(null);
let passwordCheck: VueRef<string | null> = ref(null);

function inputStatus(validation: boolean) {
    return validation ? 'success' : 'error';
}

function passwordStatus(p1: string | null, p2: string | null) {
    if (p1 == null && p2 == null) return inputStatus(true);
    if (p1 == null || p2 == null) return inputStatus(false);
    let length = Math.max([...p1].length, [...p2].length);
    return inputStatus(
        length >= MIN_PASSWORD_LEN
        && length <= MAX_PASSWORD_LEN
        && p1 == p2
    );
}

function usernameStatus(username: string | null) {
    if (username === null) return inputStatus(true);
    let length = [...username].length;
    let validation = length >= MIN_USERNAME_LEN && length <= MAX_USERNAME_LEN;
    return inputStatus(validation);
}

function emailStatus(email: string | null) {
    if (email == null) return inputStatus(true);
    return inputStatus(validateEmail(email));
}

function showMessage() {
    message.info('Sign up!');
}
</script>
