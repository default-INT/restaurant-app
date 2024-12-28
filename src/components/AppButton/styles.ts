import { StyleSheet } from 'react-native';
import { colors } from '@root/constants/colors';

export const styles = StyleSheet.create({
  button: {
    position: 'relative',
    elevation: 4,
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 24,
  },
  innerContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: 0,
  },
  text: {
    color: colors.textPrimary,
    fontSize: 16,
    textAlign: 'center',
  },
});
