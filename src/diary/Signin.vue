<script setup lang="ts">
import Signin from "./components/Signin.vue";
import {useRoute, useRouter} from "vue-router";

let router = useRouter();
let route = useRoute();

function signupClick() {
  console.log(route.path);
  router.push('signup');
}
</script>

<template>
  <div class="form">
    <n-space vertical align="center">
      <Signin/>
      <n-a @click="signupClick">Sign up</n-a>
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
