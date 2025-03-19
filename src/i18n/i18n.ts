
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import translationPL from './locales/pl/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  pl: {
    translation: translationPL
  },
  en: {
    translation: translationEN
  }
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: 'pl', // Default language is Polish
    supportedLngs: ['pl', 'en'],
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    detection: {
      order: ['navigator', 'localStorage', 'htmlTag'],
      caches: ['localStorage'],
    }
  });

export default i18n;
