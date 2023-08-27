import { userManager } from "@/composables/UserManager";
export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("to", to.name, to);
  if (to.name === "UserInfo") {
    // auth
    const user = await userManager.getUser();
    console.log("user expired", user, user?.expired);
    if (user?.expired || user?.expired === undefined) {
      // 401 to /
      console.log("401 redirect to /");
      return navigateTo("/");
    }
  }
});
