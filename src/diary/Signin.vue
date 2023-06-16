<script setup lang="ts">
</script>

<template>
    <div id="form">
        <n-space vertical justify="center">
            <n-h1 style="text-align: center">Sign in</n-h1>
            <n-input placeholder="Username"></n-input>
            <n-input placeholder="Password"></n-input>
            <div style="text-align: center;">
                <n-button attr-type="submit">Sign in</n-button>
            </div>
        </n-space>
    </div>
</template>
<style>
#form {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
