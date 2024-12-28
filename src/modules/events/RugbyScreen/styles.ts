import { StyleSheet } from 'react-native';
import { colors } from '@root/constants/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 100,
    gap: 20,
  },
  dateText: {
    color: colors.textPrimary,
    textAlign: 'right',
  },
  text: {
    color: colors.textPrimary,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 600,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  header: {
    gap: 8,
  },
  description: {
    backgroundColor: colors.amber,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  descriptionText: {
    textAlign: 'center',
  },
  cursive: {
    fontStyle: 'italic',
  },
  bold: {
    fontWeight: 900,
  },
});
