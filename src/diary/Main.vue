<script setup lang="ts">
import {useRouter} from "vue-router";

let router = useRouter();
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
