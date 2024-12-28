import { Platform, StyleSheet } from 'react-native';
import { colors } from '@root/constants/colors';

export const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 14,
    paddingVertical: 0,
  },
  safeArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    width: '100%',
  },
  logo: {
    alignSelf: 'center',
    paddingHorizontal: 16,
    borderRadius: 12,
    paddingTop: 8,
    marginTop: Platform.OS === 'android' ? 10 : 0,
    paddingBottom: 10,
    backgroundColor: colors.primary,
  },
  logoImg: { width: 90, height: 40 },
});
