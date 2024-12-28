import { ComponentProps, memo, VFC } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { OpacityPressable } from '@root/components/OpacityPressable';

import { styles } from './styles';

type TButtonProps = Omit<ComponentProps<typeof TouchableOpacity>, 'children' | 'ref'>;

export interface IProps extends TButtonProps {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  icon?: VFC<SvgProps>;
  iconProps?: SvgProps;
  disabled?: boolean;
}

export const AppButton = memo((props: IProps) => {
  const {
    title,
    textStyle,
    style,
    icon: Icon,
    iconProps,
    ...args
  } = props;

  return (
    <OpacityPressable
      {...args}
      layoutStyle={StyleSheet.compose(styles.button, style)}
    >
      <View style={styles.innerContainer}>
        {Icon && (
          <Icon style={styles.icon} width={28} height={28} {...iconProps} />
        )}
        <Text style={StyleSheet.compose(styles.text, textStyle)}>
          {title}
        </Text>
      </View>
    </OpacityPressable>
  );
});

AppButton.displayName = 'AppButton';
