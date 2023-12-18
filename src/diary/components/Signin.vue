<script setup lang="ts">
import {ref} from "vue";
import * as $ from 'jquery';

let username = ref<string>();
let password = ref<string>();

function submitClick() {
  $.ajax({
    method: 'GET',
    url: '/api/demo',
    async: true,
    success: data => {
      console.log(data);
    },
    error: e => {
      console.log(e);
    }
  });
}
</script>

<template>
  <div id="form">
    <n-space vertical justify="center">
      <n-h1 style="text-align: center">Sign in</n-h1>
      <n-input placeholder="Username" v-model:value="username"></n-input>
      <n-input placeholder="Password" v-model:value="password"></n-input>
      <div style="text-align: center;">
        <n-button attr-type="submit" @click="submitClick">Sign in</n-button>
      </div>
    </n-space>
  </div>
</template>
