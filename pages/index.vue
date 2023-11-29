<script setup>
const { locale } = useI18n();
// useLocalePath是一个可组合项，它返回一个用于获取给定路径的本地化 URL 的函数。
// 第一个参数可以是路径或路由名称，也可以是更复杂路由的对象。
// 区域设置代码可以作为第二个参数传递，以生成特定语言的链接：
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <div class="container mx-auto">
    <!-- <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="cn">cn</option>
      </select>
      <p>{{ $t("welcome") }}</p>
    </form> -->
    <!-- 切换语言 -->
    <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    <NuxtLink :to="switchLocalePath('cn')">中文</NuxtLink>
    <!-- 测试本地路由 -->
    <p class="d-flex">
      <NuxtLink :to="localePath('index')">{{ $t("home") }}</NuxtLink>
      <NuxtLink :to="localePath('/')">{{ $t("home") }}</NuxtLink>
      <NuxtLink :to="localePath('index', 'en')">Homepage in English</NuxtLink>
      <NuxtLink :to="localePath('/user/profile')">
        Route by path to: {{ $t("profile") }}
      </NuxtLink>
      <NuxtLink :to="localePath('user-profile', 'cn')">
        Route by name to: {{ $t("profile") }}
      </NuxtLink>
    </p>
  </div>
</template>
