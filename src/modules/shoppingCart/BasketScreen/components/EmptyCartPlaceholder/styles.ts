import { StyleSheet } from 'react-native';
import { colors } from '@root/constants/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    gap: 40,
    alignItems: 'center',
  },
  mainText: {
    fontSize: 32,
    color: colors.primaryOp40,
    textTransform: 'uppercase',
    fontWeight: 700,
  },
});
