<template>
  <div class="about">
    <h1>Auth Callback</h1>
    <h2>
      <router-link to="/">返回</router-link>
    </h2>
    <h2>
      <router-link to="/userinfo">用户信息</router-link>
    </h2>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { userManager } from "@/composables/UserManager";

const router = useRouter();

userManager.events.addUserSignedIn(() => {
  alert("addUserSignedIn 用户登录成功");
});

userManager.events.addUserSessionChanged(() => {
  alert("addUserSessionChanged 用户登录成功");
});
// 这个事件会在用户加载时触发。
userManager.events.addUserLoaded(() => {
  console.log("addUserLoaded 用户登录成功");
  router.push("/userinfo");
});

onMounted(() => {
  // console.log("route query", route.query);
  userManager.signinCallback(window.location.href);
});
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
