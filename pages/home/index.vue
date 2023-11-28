<template>
  <div>
    <p>Home</p>
    <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    <NuxtLink :to="switchLocalePath('cn')">中文</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
</script>
