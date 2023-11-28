export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      welcome: "Welcome",
      home: "Home",
      profile: "Profile",
    },
    cn: {
      welcome: "您好",
      home: "首页",
      profile: "描述文件",
    },
  },
}));
