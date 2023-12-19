<script setup lang="ts">
</script>

<template>
  <form id="form" method="post" action="/api/diary/session" enctype="application/x-www-form-urlencoded">
    <n-space vertical justify="center">
      <n-h1 style="text-align: center">Sign in</n-h1>
      <n-input placeholder="Username" :input-props="{name: 'username'}"></n-input>
      <n-input placeholder="Password" :input-props="{name: 'password'}" show-password-on="click" type="password"></n-input>
      <input type="text" name="callback" style="display: none" value="/diary/#/session"/>
      <div style="text-align: center;">
        <n-button attr-type="submit">Sign in</n-button>
      </div>
    </n-space>
  </form>
</template>
