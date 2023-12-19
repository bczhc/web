<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import Centered from "./components/Centered.vue";

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
    <n-h1>你好，{{ extras.username!! }}</n-h1>
    <n-h2>马上前往主页……</n-h2>
  </Centered>
  <Centered v-else>
    <n-h1>账号或密码错误。</n-h1>
    <n-h2>正在返回登录页面……</n-h2>
  </Centered>
</template>
