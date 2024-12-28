import { StyleSheet } from 'react-native';
import { colors } from '@root/constants/colors';

export const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    borderRadius: 16,
    paddingVertical: 8,
    backgroundColor: colors.primary,
    color: colors.textPrimary,
  },
  text: {
    fontSize: 24,
    fontWeight: 700,
    color: colors.amber,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
});
