import { en, vi } from '@src/i18n';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const resources = {
  vi: {
    translation: vi,
  },
  en: {
    translation: en,
  }
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: 'vi',
    fallbackLng: 'vi',
    resources,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    storage: AsyncStorage,
  });

export default i18n;
