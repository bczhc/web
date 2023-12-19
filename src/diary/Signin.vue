<script setup lang="ts">
import Signin from "./components/Signin.vue";
import {useRouter} from "vue-router";
import {useI18n} from "vue-i18n";

let router = useRouter();
let {t} = useI18n();

function signupClick() {
  router.push('signup');
}
</script>

<template>
  <div class="form">
    <n-space vertical align="center">
      <Signin/>
      <n-a @click="signupClick">{{ t('signup_btn') }}</n-a>
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
