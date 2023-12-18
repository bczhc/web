<script setup lang="ts">
import Signin from "./components/Signin.vue";
import {useRouter} from "vue-router";

let router = useRouter();

function signupClick() {
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
