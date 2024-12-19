import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const RootScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', gap: 20 }}>
      <Text style={{ textAlign: 'center' }}>
        {t('root:welcome')}
      </Text>
      <Button
        title={t('root:go_to_home')}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};
