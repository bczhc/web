<script setup lang="ts">
import {fetchMe} from "./lib";
import {h, ref} from "vue";
import {MenuOption, useMessage} from 'naive-ui';
import Centered from "./components/Centered.vue";
import {RouterLink} from "vue-router";
import {useI18n} from "vue-i18n";

let {t} = useI18n();

let userInfo = ref<object>()
let username = ref<string>()
let message = useMessage();

window.onload = () => {
  fetchMe().then(x => {
    if (x['status'] === 0) {
      userInfo.value = x;
      username.value = x['data']['username'] as string;
    } else {
      message.error(t('invalid_session_message'))
    }
  }).catch(_ => {
    message.error(t('invalid_session_message'))
  })
};

let menuOptions: MenuOption[] = [
  {
    label: () => h(
        RouterLink,
        {
          to: {
            path: '/home'
          }
        },
        {
          default: () => 'Home'
        }
    ),
    key: 'k1'
  },
]
</script>

<template>
  <n-page-header style="padding: 1% 2%; border-bottom: lightgray solid 1px">
    <template #title>
      <a
          href="/diary/"
          style="text-decoration: none; color: inherit"
      >
        My Diary
      </a>
    </template>
    <template #header v-if="false">
      <n-menu :options="menuOptions" mode="horizontal"/>
    </template>
    <template #extra v-if="username">
      <router-link to="/profile" class="plain-a">{{ username }}</router-link>
    </template>
  </n-page-header>
  <Centered v-if="userInfo">
    <h1>This is the Home Page -- TODO</h1>
  </Centered>
</template>

<style scoped>
.plain-a, .plain-a:hover, .plain-a:visited, .plain-a:active {
  text-decoration: none;
  color: inherit;
}
</style>
