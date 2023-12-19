<script setup lang="ts">
import Centered from "./components/Centered.vue";
import {useI18n} from "vue-i18n";

let {t} = useI18n();
</script>

<template>
<Centered>
<n-h1>{{ t('user_profile_title') }}</n-h1>
</Centered>
</template>

<style scoped>

</style>
