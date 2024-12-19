import i18next, { LanguageDetectorAsyncModule } from 'i18next';
import { findBestLanguageTag } from 'react-native-localize';
import { initReactI18next } from 'react-i18next';
import { Locale } from '@root/types/locale';
import { appConfig } from '@root/constants/appConfig';
import { resources } from './resources';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    const locale = findBestLanguageTag([
      Locale.En,
      Locale.Ru,
    ]);

    callback(locale?.languageTag);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

export const init = () => i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: 'v4',
    fallbackLng: appConfig.defaultLanguage,
    interpolation: { escapeValue: false },
  });
