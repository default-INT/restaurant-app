import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: Platform.OS === 'android' ? 20 : 0,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 60,
    gap: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 700,
    width: 260,
    textAlign: 'center',
  },
  content: {
    gap: 10,
    alignItems: 'center',
    height: 200,
  },
});
