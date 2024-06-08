import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector  from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationZH from "./locales/zh/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  zh: {
    translation: translationZH,
  },
};


i18n.use(initReactI18next)
.use(LanguageDetector)
.init({
  resources,
    debug:true,
    lng: "zh",
    fallbackLng: "en",
returnObjects:"true",
});