<script setup lang="ts">
import {useI18n} from "vue-i18n";

let { t } = useI18n()
</script>

<template>
  <form id="form" method="post" action="/api/diary/session" enctype="application/x-www-form-urlencoded">
    <n-space vertical justify="center">
      <n-h1 style="text-align: center">{{t('signin_title')}}</n-h1>
      <n-input :placeholder="t('username_placeholder')" :input-props="{name: 'username'}"></n-input>
      <n-input :placeholder="t('password_placeholder')" :input-props="{name: 'password'}" show-password-on="click" type="password"></n-input>
      <input type="text" name="callback" style="display: none" value="/diary/#/session"/>
      <div style="text-align: center;">
        <n-button attr-type="submit">{{ t('signin_btn') }}</n-button>
      </div>
    </n-space>
  </form>
</template>
