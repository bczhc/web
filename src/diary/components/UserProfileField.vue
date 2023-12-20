<script setup lang="ts">
defineProps(['title', 'content'])
</script>

<template>
  <div>
    <n-text style="font-weight: bold; font-size: larger">
      {{ title }}
    </n-text>
    <br>
    <span v-if="content">{{ content }}</span>
    <span v-else>
      <n-text italic style="color: gray">null</n-text>
    </span>
  </div>
</template>

<style scoped>

</style>
