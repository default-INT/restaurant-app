import { StyleSheet } from 'react-native';
import { colors } from '@root/constants/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 24,
    gap: 20,
  },
  dateText: {
    color: colors.textPrimary,
    textAlign: 'right',
  },
  header: {
    gap: 8,
  },
});
