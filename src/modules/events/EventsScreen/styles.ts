import { Platform, StyleSheet } from 'react-native';
import { colors } from '@root/constants/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    gap: 20,
    paddingBottom: Platform.OS === 'android' ? 20 : 0,
  },
  button: {
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 700,
    color: colors.amber,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
});
