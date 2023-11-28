import {
  UserManager,
  UserManagerSettings,
  WebStorageStateStore,
} from "oidc-client-ts";
import CookieStore from "./CookieStorage";

const OidcConfig: UserManagerSettings = {
  authority: "http://localhost:9000", // "http://localhost:9000",
  client_id: "public-client",
  redirect_uri: "http://localhost:4200/auth/callback",
  scope: "openid", // 'openid profile ' + your scopes
  post_logout_redirect_uri: "http://localhost:4200",
  response_type: "code",
  // response_mode: "fragment",
  // silentRenew: true,
  // silentRenewUrl: window.location.origin + '/silent-renew.html',
  // renewTimeBeforeTokenExpiresInSeconds: 10,
  automaticSilentRenew: false,
  monitorSession: true,
  loadUserInfo: true,
  // userStore: new WebStorageStateStore({ store: new CookieStore() }),
};

export const userManager = new UserManager(OidcConfig);

// 注册事件
userManager.events.removeUserLoaded(() => {
  alert("removeUserLoaded 注销成功");
});

userManager.events.removeUserUnloaded(() => {
  alert("removeUserUnloaded 注销成功");
});

userManager.events.removeUserSignedOut(() => {
  alert("removeUserSignedOut 注销成功");
});

export const oauth2Login = async () => {
  clearToken();
  await userManager.signinRedirect();
};

export const oauth2Logout = async () => {
  await userManager.signoutRedirect();
};

export const refreshToken = async (loginPath: string) => {
  const user = await userManager.signinRedirectCallback();
  if (user) {
    localStorage.setItem("token_type", user.token_type);
    localStorage.setItem("access_token", user.access_token);
    localStorage.setItem("refresh_token", user.refresh_token || "");
    localStorage.setItem("id_token", user.id_token || "");
  } else {
    clearToken();
  }
};

export const clearToken = () => {
  const redirect = localStorage.getItem("redirect");
  localStorage.clear();
  if (redirect) {
    localStorage.setItem("redirect", redirect);
  }
  sessionStorage.clear();
};
