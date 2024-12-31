import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import { userStore } from '@root/store/userStore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SuccessIcon } from '@root/assets/icons';
import { AppButton } from '@root/components/AppButton';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export const SuccessOrderScreen = memo(() => {
  const { t } = useTranslation('success_screen');
  const navigation = useNavigation();

  const handleToMain = useCallback(() => {
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: 'StoreStack' }],
    }));
  }, [navigation]);

  useEffect(() => {
    // some post request
    setTimeout(() => {
      userStore.completeOrder();
    }, 500);
  }, []);

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <View style={styles.root}>
        <SuccessIcon width={140} height={140} />
        <View style={styles.content}>
          <Text style={styles.text}>{t('success_text')}</Text>
          <Image
            source={require('./assets/qr-code.png')}
            style={styles.img}
          />
        </View>
      </View>
      <AppButton title={t('common:to_main')} onPress={handleToMain} />
    </SafeAreaView>
  );
});

SuccessOrderScreen.displayName = 'SuccessOrder';
