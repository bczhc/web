<script setup lang="ts">
import Centered from "./components/Centered.vue";
import {useI18n} from "vue-i18n";
import {fetchMe, genderToString, parseUserInfoJson, timestampToDateString, UserInfo} from "./lib";
import {useMessage} from 'naive-ui';
import {ref} from "vue";
import UserProfileField from "./components/UserProfileField.vue";

let {t} = useI18n();
let message = useMessage();
let userInfo = ref<UserInfo>()

fetchMe().then(x => {
  userInfo.value = parseUserInfoJson(x['data']);
  console.log(userInfo.value);
}).catch(() => {
  message.error(t('invalid_session_message'))
})
</script>

<template>
  <Centered>
    <n-h1>{{ t('user_profile_title') }}</n-h1>

    <div v-if="userInfo">
      <UserProfileField :title="t('user_profile_username')" :content="userInfo.username"/>
      <UserProfileField :title="t('user_profile_name')" :content="userInfo.name"/>
      <UserProfileField :title="t('user_profile_email')" :content="userInfo.email"/>
      <UserProfileField :title="t('user_profile_signup_time')" :content="timestampToDateString(userInfo.signup_time)"/>
      <UserProfileField :title="t('user_profile_gender')" :content="genderToString(userInfo.gender)"/>
    </div>
    <div v-else>
      <n-h2>{{ t('loading_label') }}</n-h2>
    </div>
  </Centered>
</template>

<style scoped>

</style>
