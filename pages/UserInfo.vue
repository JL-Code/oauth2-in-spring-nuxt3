<template>
  <div>
    <h1>UserInfo</h1>
    <p>{{ userinfo }}</p>
    <button type="button" @click="showIdToken">idToken</button>
    <button type="button" @click="getUserInfo">getUserInfo</button>
    <button type="button" @click="getMessageResouce">getMessageResouce</button>
    <button type="button" @click="getOrders">getOrders</button>
    <button type="button" @click="getOidcAttributes">getOidcAttributes</button>
    <button type="button" @click="oauth2Logout">oauth2Logout</button>
    <p>
      <RouterLink to="/">login</RouterLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { userManager, oauth2Logout } from "@/composables/UserManager";

const userinfo = reactive({});

const getUserInfo = async () => {
  const user = await userManager.getUser();
  console.log("user.id_token", user);
  alert(JSON.stringify(user));
};

const showIdToken = async () => {
  const user = await userManager.getUser();
  console.log("user.id_token", user.id_token);
  alert(user.id_token);
};

const getOidcAttributes = async () => {
  const user = await userManager.getUser();
  $fetch("/api/oidc/attributes", {
    headers: {
      Authorization: `Bearer ${user!.access_token}`,
    },
  }).then((res) => {
    console.log(JSON.stringify(res));
    alert(JSON.stringify(res));
  });
};

const getMessageResouce = async () => {
  const user = await userManager.getUser();
  $fetch("http://localhost:8080/messages", {
    headers: {
      Authorization: `Bearer ${user!.access_token}`,
    },
  }).then((res) => {
    console.log(JSON.stringify(res));
    alert(JSON.stringify(res));
  });
};

const getOrders = async () => {
  const user = await userManager.getUser();
  $fetch("http://localhost:8080/api/orders/purchased?page=1&limit=15", {
    headers: {
      Authorization: `Bearer ${user!.access_token}`,
    },
  }).then((res) => {
    console.log(JSON.stringify(res));
    alert(JSON.stringify(res));
  });
};

onMounted(async () => {
  const user = await userManager.getUser();
  console.log("user", user);
  Object.assign(userinfo, user || {});
});
</script>
