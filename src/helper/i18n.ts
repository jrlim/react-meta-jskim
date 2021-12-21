import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../i18n/en.json';
import ko from '../i18n/ko.json';
import cn from '../i18n/cn.json';
import tw from '../i18n/tw.json';

const languageDetector = new LanguageDetector();

languageDetector.addDetector({
  name: 'custom',
  lookup() {
    if (window.navigator.language === 'ko-KR') {
      return 'ko';
    }
    return 'en';
  }
});

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ko: {
        translation: ko
      },
      cn: {
        translation: cn
      },
      tw: {
        translation: tw
      }
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'custom'],
      caches: ['localStorage']
    }
  });

window.i18n = i18n;

export default i18n;
