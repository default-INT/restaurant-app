import { StyleSheet } from 'react-native';
import { colors } from '@root/constants/colors';

export const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: colors.primary,
    color: colors.textPrimary,
  },
});
