<script setup lang="ts">
import Signup from "./components/Signup.vue";
import {useRouter} from "vue-router";
import {useI18n} from "vue-i18n";

let router = useRouter();
let {t} = useI18n();
</script>

<template>
    <div class="form">
        <n-space vertical align="center">
            <Signup/>
          <p>
            {{ t('signup_page_signin_btn_message1' )}}
            <n-a @click="router.push('signin')">{{ t('signin_btn') }}</n-a>{{ t('signup_page_signin_btn_message2') }}
          </p>
        </n-space>
    </div>
</template>

<style>
.form {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
