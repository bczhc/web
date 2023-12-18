<script setup lang="ts">
import {useRouter} from "vue-router";
import * as $ from 'jquery';
import {fetchMe} from "./lib";

let router = useRouter();

window.onload = () => {
  fetchMe().then(x => {
    if (x['status'] === 0) {
      console.log('Logged in');
      router.push('home');
    }
  })
}
</script>

<template>
  <div class="center">
    <n-space vertical align="center">
      <h1>My Diary</h1>
      <n-a @click="router.push('signin')">Sign in</n-a>
    </n-space>
  </div>
</template>

<style scoped>
.center {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
