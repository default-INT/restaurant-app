import { ComponentProps, memo, PropsWithChildren, useCallback } from 'react';
import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface IProps extends ComponentProps<typeof Pressable> {
  layoutStyle?: StyleProp<ViewStyle>;
}

type TProps = PropsWithChildren<IProps>;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const OpacityPressable = memo((props: TProps) => {
  const {
    children,
    onPressIn,
    onPressOut,
    layoutStyle,
    disabled,
    onPress,
    ...rest
  } = props;

  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: disabled ? 0.5 : opacity.value,
  }));

  const handlePress = useCallback((e: GestureResponderEvent) => {
    if (disabled) return;
    if (onPress) onPress(e);
  }, [disabled, onPress]);

  const handlePressIn = useCallback((event: GestureResponderEvent) => {
    if (disabled) return;
    if (onPressIn) onPressIn(event);
    opacity.value = withTiming(0.3, {
      easing: Easing.inOut(Easing.ease),
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, onPressIn]);

  const handlePressOut = useCallback((event: GestureResponderEvent) => {
    if (disabled) return;
    if (onPressOut) onPressOut(event);
    opacity.value = withTiming(1, {
      easing: Easing.inOut(Easing.ease),
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, onPressOut]);

  return (
    <AnimatedPressable
      style={StyleSheet.compose(layoutStyle, animatedStyle)}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
      {...rest}
    >
      {children}
    </AnimatedPressable>
  );
});

OpacityPressable.displayName = 'OpacityPressable';
