import { memo } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface IProps {
  title: string
}

export const ScreenTitle = memo((props: IProps) => {
  const { title } = props;

  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
});

ScreenTitle.displayName = 'ScreenTitle';
