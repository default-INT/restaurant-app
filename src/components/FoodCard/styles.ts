import { StyleSheet } from 'react-native';
import { colors } from '@root/constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 16,
    gap: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  imageContainer: {
    position: 'relative',
    flex: 1,
    height: 100,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  footerContainer: {
    left: 8,
    bottom: 8,
    right: 8,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 24,
  },
  displayContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  price: {
    backgroundColor: colors.primaryOp80,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  priceText: {
    color: colors.textPrimary,
  },
  actions: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  button: {
    paddingVertical: 4,
    borderRadius: 8,
    paddingHorizontal: 24,
  },
  manageItemContainer: {
    gap: 8,
  },
  counterContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.primary,
  },
  countContainer: {
    alignItems: 'center',
  },
  countText: {
    color: colors.textPrimary,
  },
  iconButton: {
    width: 24,
    height: 24,
    backgroundColor: colors.textPrimary,
    padding: 4,
  },
  primaryIconButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  icon: {
    color: colors.textPrimary,
  },
  secondaryText: {
    fontSize: 12,
    color: colors.defaultText,
  },
  buttonText: {
    fontSize: 14,
  },
});
