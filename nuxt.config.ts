// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia-plugin-persistedstate/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],
  routeRules: {
    "/.well-known/**": {
      proxy: `http://localhost:9000/.well-known/**`,
    },
    "/api/**": {
      proxy: `http://localhost:9000/api/**`,
    },
  },
  nitro: {},
  devServer: {
    port: 4200,
  },
});
