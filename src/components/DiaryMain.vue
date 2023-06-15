<script setup>
import {ref} from "vue";

let count = ref(0);
</script>

<template>
  <n-button @click="count++">{{ count }}</n-button>
</template>
