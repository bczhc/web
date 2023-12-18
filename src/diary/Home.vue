<script setup lang="ts">
import {fetchMe} from "./lib";
import {ref} from "vue";

let userInfo = ref<object>()

window.onload = () => {
  fetchMe().then(x => {
    // TODO: handle invalid session
    userInfo.value = x;
  })
};

</script>

<template>
  <h1>This is the Home Page</h1>
  <p v-if="userInfo">User Info</p>
  <div>{{ userInfo }}</div>
</template>
