<script setup lang="ts">
</script>

<template>
  <div class="center">
    <n-space vertical align="center">
      <slot/>
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
