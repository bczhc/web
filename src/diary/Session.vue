<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import Centered from "./components/Centered.vue";
import {useI18n} from "vue-i18n";

let {t} = useI18n();

interface Extras {
  succeeded: boolean,
  username?: string,
}

let route = useRoute();
let router = useRouter();

let extras: Extras = JSON.parse(route.query['extras'] as string);

window.onload = () => {
  setTimeout(() => {
    router.push(extras.succeeded ? 'home' : 'signin').then(() => {
          if (extras.succeeded) router.go(0)
        }
    );
  }, 2000);
}
</script>
<template>
  <Centered v-if="extras.succeeded">
    <n-h1>{{ t('welcome_user_msg', [extras.username!!]) }}</n-h1>
    <n-h2>{{ t('redirecting_to_home_page_msg') }}</n-h2>
  </Centered>
  <Centered v-else>
    <n-h1>{{ t('authentication_failed_msg') }}</n-h1>
    <n-h2>{{ t('redirecting_to_signin_page_msg') }}……</n-h2>
  </Centered>
</template>
