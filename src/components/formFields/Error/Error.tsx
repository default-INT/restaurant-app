import { memo } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

import { styles } from './styles';

interface IProps {
  errorMessage?: string;
  modifiers?: StyleProp<TextStyle>
}

export const Error = memo(({ errorMessage, modifiers }: IProps) => (
  <Text style={StyleSheet.compose(styles.error, modifiers)}>{errorMessage}</Text>
));

Error.displayName = 'Error';
