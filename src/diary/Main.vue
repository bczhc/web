<script setup lang="ts">
import Signup from "./Signup.vue";
import Signin from "./Signin.vue";
</script>

<template>
    <div class="form">
        <n-space vertical align="center">
<!--            <Signin/>-->
            <Signup/>
            <n-a @click="">Sign up</n-a>
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
