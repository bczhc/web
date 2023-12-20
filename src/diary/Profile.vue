<script setup lang="ts">
import Centered from "./components/Centered.vue";
import {useI18n} from "vue-i18n";
import {AXIOS_CONFIG_CONTENT_TYPE_JSON, fetchMe, GenderExt, ServerUserProfile, timestampToDateString} from "./lib";
import {useMessage} from 'naive-ui';
import {ref} from "vue";
import UserProfileField from "./components/UserProfileField.vue";
import {default as axios} from 'axios';

let {t} = useI18n();
let message = useMessage();
let userProfile = ref<ServerUserProfile>()

fetchMe().then(x => {
  userProfile.value = x['data'] as ServerUserProfile;
  console.log(userProfile.value);
}).catch(() => {
  message.error(t('invalid_session_message'))
})

async function doPatchRequest() {
  await axios.patch('/api/diary/user', userProfile.value,
      AXIOS_CONFIG_CONTENT_TYPE_JSON
  )
}
</script>

<template>
  <Centered>
    <n-h1>{{ t('user_profile_title') }}</n-h1>

    <div v-if="userProfile">
      <UserProfileField :title="t('user_profile_username')" :content="userProfile.username"/>
      <UserProfileField :title="t('user_profile_name')" :content="userProfile.name"
                        :on-save="async x => {userProfile.name = x; await doPatchRequest()}"/>
      <UserProfileField :title="t('user_profile_email')" :content="userProfile.email"
                        :on-save="async x => {userProfile.email = x; await doPatchRequest()}"/>
      <UserProfileField :title="t('user_profile_signup_time')"
                        :content="timestampToDateString(userProfile.signupTime)"/>
      <UserProfileField :title="t('user_profile_gender')"
                        :content="GenderExt.toString(GenderExt.parseServerGender(userProfile.gender))"/>
    </div>
    <div v-else>
      <n-h2>{{ t('loading_label') }}</n-h2>
    </div>
  </Centered>
</template>

<style scoped>

</style>
