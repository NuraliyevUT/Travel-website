import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18next, { init } from "i18next";

import uzTranslation from "../public/locales/uz.json";
import ruTranslation from "../public/locales/ru.json";
import enTranslation from "../public/locales/en.json";

i18n

  .use(languageDetector)

  .use(initReactI18next);

i18next.init({
  fallbacking: "en",
  lng: "",
  dubug: true,
  resources: {
    uz: { translation: uzTranslation },
    ru: { translation: ruTranslation },
    en: { translation: enTranslation },
  },
});

export default i18n;
