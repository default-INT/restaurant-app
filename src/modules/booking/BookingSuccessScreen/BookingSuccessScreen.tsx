import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { CommonActions, StaticParamList, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BookingNavigatorStack } from '@root/navigation/stack/BookingNavigatorStack';
import { AppButton } from '@root/components/AppButton';
import { BookingSuccessIcon } from '@root/assets/icons';
import { styles } from './styles';

export const BookingSuccessScreen = memo(() => {
  const { t } = useTranslation('booking_success');

  const navigation = useNavigation<NativeStackNavigationProp<StaticParamList<
    typeof BookingNavigatorStack
  >>>();

  const handleToMain = useCallback(() => {
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: 'StoreStack' }],
    }));
  }, [navigation]);

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <View style={styles.root}>
        <BookingSuccessIcon width={140} height={140} />
        <View style={styles.content}>
          <Text style={styles.text}>{t('success_text')}</Text>
        </View>
      </View>
      <AppButton title={t('common:to_main')} onPress={handleToMain} />
    </SafeAreaView>
  );
});

BookingSuccessScreen.displayName = 'BookingSuccessScreen';
