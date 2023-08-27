`
<template>
  <div>
    <h1>OAuth2 in Spring</h1>
    <button type="button" @click="oauth2Login">login</button>
  </div>
</template>

<script setup lang="ts">
import { oauth2Login } from "../composables/UserManager";
</script>
