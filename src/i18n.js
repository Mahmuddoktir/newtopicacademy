import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";

import uzTranslation from "./changelng/uz.json";
import ruTranslation from "./changelng/ru.json";
import enTranslation from "./changelng/en.json";

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "uz",
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
      en: { translation: enTranslation },
    },
  });

export default i18n;
