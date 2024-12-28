import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: Platform.OS === 'android' ? 20 : 0,
  },
  content: {
    flex: 1,
  },
  form: {
    paddingTop: 12,
    gap: 12,
  },
  actions: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    flexGrow: 1,
  },
});
