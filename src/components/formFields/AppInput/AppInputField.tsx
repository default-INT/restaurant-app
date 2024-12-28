import { ComponentProps, memo } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '@root/constants/colors';
import { styles } from './styles';

export interface IAppInputFieldProps extends ComponentProps<typeof TextInput> {
  label?: string;
}

export const AppInputField = memo((props: IAppInputFieldProps) => {
  const { style, label, ...inputProps } = props;

  return (
    <View style={styles.root}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={StyleSheet.compose(styles.input, style)}
        placeholderTextColor={colors.primaryOp80}
        {...inputProps}
      />
    </View>
  );
});

AppInputField.displayName = 'AppInput';
