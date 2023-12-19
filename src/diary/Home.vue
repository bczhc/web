<script setup lang="ts">
import {fetchMe} from "./lib";
import {ref} from "vue";
import {useMessage} from 'naive-ui';
import Centered from "./components/Centered.vue";

let userInfo = ref<object>()
let message = useMessage();

window.onload = () => {
  fetchMe().then(x => {
    if (x['status'] === 0) {
      userInfo.value = x;
    } else {
      message.error('无效会话');
    }
  }).catch(_ => {
    message.error('无效会话');
  })
};

</script>

<template>
  <Centered>
    <h1>This is the Home Page</h1>
    <div v-if="userInfo">{{ userInfo }}</div>
  </Centered>
</template>
