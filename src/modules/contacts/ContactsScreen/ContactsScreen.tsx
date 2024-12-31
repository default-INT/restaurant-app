import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonActions, StaticParamList, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ContactsNavigatorStack } from '@root/navigation/stack/ContactsNavigatorStack';
import { AppButton } from '@root/components/AppButton';
import { AppInput } from '@root/components/formFields/AppInput';
import { ScreenTitle } from '@root/components/ScreenTitle';
import { styles } from './styles';

const initialValues = {
  phoneNumber: '+375 (29) 315-74-25',
  address: 'Минск, ул. Независимости, 75',
  data: 'Данные о ресторане',
  zip: '141680',
};

export const ContactsScreen = memo(() => {
  const { t } = useTranslation('contacts_screen');

  const navigation = useNavigation<NativeStackNavigationProp<StaticParamList<
    typeof ContactsNavigatorStack
  >>>();

  const handleToMain = useCallback(() => {
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: 'StoreStack' }],
    }));
  }, [navigation]);

  return (
    <SafeAreaView edges={['bottom']} style={styles.root}>
      <View style={styles.content}>
        <ScreenTitle title={t('title')} />
        <View style={styles.form}>
          <AppInput
            label={t('fields.phone_number.label')}
            value={initialValues.phoneNumber}
            editable={false}
          />
          <AppInput
            label={t('fields.address.label')}
            value={initialValues.address}
            editable={false}
          />
          <AppInput
            label={t('fields.data.label')}
            value={initialValues.data}
            editable={false}
          />
          <AppInput
            label={t('fields.zip.label')}
            value={initialValues.zip}
            editable={false}
          />
        </View>
      </View>
      <AppButton title={t('common:to_main')} onPress={handleToMain} />
    </SafeAreaView>
  );
});

ContactsScreen.displayName = 'ContactsScreen';
