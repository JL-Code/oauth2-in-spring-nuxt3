// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@pinia-plugin-persistedstate/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["en", "cn"], // used in URL path prefix
    defaultLocale: "en", // default locale of your project for Nuxt pages and routings
  },
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
