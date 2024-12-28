import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: Platform.OS === 'android' ? 20 : 0,
  },
});
