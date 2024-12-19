import { Platform } from 'react-native';
import { Locale } from '@root/types/locale';

export const appConfig = {
  defaultLanguage: Locale.En,
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};
