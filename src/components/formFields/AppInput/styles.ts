import { StyleSheet } from 'react-native';
import { colors } from '@root/constants/colors';

export const styles = StyleSheet.create({
  root: {
    gap: 4,
  },
  label: {
    paddingLeft: 12,
  },
  input: {
    borderWidth: 1,
    padding: 16,
    borderColor: colors.primary,
    borderRadius: 14,
    maxHeight: 50,
  },
  formikContainer: {
    position: 'relative',
  },
});