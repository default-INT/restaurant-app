import { Platform, StyleSheet } from 'react-native';
import { colors } from '@root/constants/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  logoPlaceholder: {
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: colors.primary,
    paddingHorizontal: 28,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuLinksContainer: {
    gap: 14,
    width: '100%',
  },
  basketBtn: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: colors.amber,
  },
  image: { width: '100%', height: 80 },
});
