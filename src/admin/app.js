import favicon from "./extensions/favicon.ico";
import logo from "./extensions/logo-kinddmark.png";
const config = {
  locales: [
    // 'ar',
    "fr",
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  head: {
    favicon: favicon,
  },
  auth: {
    logo: logo,
  },
  menu: {
    logo: logo,
  },
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
  theme: {
    light: {
      colors: {
        primary100: "#c63334",
        primary200: "#f2001c",
        primary500: "#f2001c", // Main primary color
        buttonPrimary500: "#c63334",
        primary600: "#ffffff",
        buttonPrimary600: "#c63334",
        primary700: "#ffffff",
        // New bottom primary color
      },
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
