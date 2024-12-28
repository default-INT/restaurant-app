import { StyleSheet } from 'react-native';
import { colors } from '@root/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  selectedImage: {
    borderRadius: 12,
    boxShadow: '0px 15.43px 15.43px 0px #00000040',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 18,
    color: colors.defaultText,
  },
  selectedText: {
    color: colors.amber,
    fontWeight: 600,
  },
});
