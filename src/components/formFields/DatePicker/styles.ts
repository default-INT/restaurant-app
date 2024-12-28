import { StyleSheet } from 'react-native';
import { colors } from '@root/constants/colors';

export const styles = StyleSheet.create({
  root: {
    gap: 4,
  },
  label: {
    paddingLeft: 12,
  },
  container: {
    borderWidth: 1,
    padding: 16,
    borderColor: colors.primary,
    borderRadius: 12,
    maxHeight: 50,
    alignItems: 'flex-start',
  },
  placeholder: {
    textAlign: 'left',
    color: colors.primaryOp80,
  },
});
