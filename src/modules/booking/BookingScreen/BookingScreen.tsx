import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import { CommonActions, StaticParamList, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BookingNavigatorStack } from '@root/navigation/stack/BookingNavigatorStack';
import { AppButton } from '@root/components/AppButton';
import { ScreenTitle } from '@root/components/ScreenTitle';
import { AppInput } from '@root/components/formFields/AppInput';
import { DatePicker } from '@root/components/formFields/DatePicker';
import { date } from '@root/utils/date';
import { IFormFields, initialValues } from './constants';
import { validationSchema } from './utils/validationSchema';
import { styles } from './styles';

export const BookingScreen = memo(() => {
  const { t } = useTranslation('booking_screen');

  const navigation = useNavigation<NativeStackNavigationProp<StaticParamList<
    typeof BookingNavigatorStack
  >>>();

  const handleToMain = useCallback(() => {
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: 'StoreStack' }],
    }));
  }, [navigation]);

  const handleSubmitForm = useCallback((values: IFormFields) => {
    console.log('submit form', values);
    navigation.navigate('Success');
  }, [navigation]);

  return (
    <SafeAreaView edges={['bottom']} style={styles.root}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <View style={styles.content}>
              <ScreenTitle title={t('title')} />
              <View style={styles.form}>
                <AppInput
                  formikName='name'
                  label={t('fields.name.label')}
                  placeholder={t('fields.name.placeholder')}
                />
                <AppInput
                  formikName='phoneNumber'
                  keyboardType='phone-pad'
                  label={t('fields.phone_number.label')}
                  placeholder={t('fields.phone_number.placeholder')}
                />
                <AppInput
                  formikName='place'
                  keyboardType='numeric'
                  label={t('fields.place.label')}
                  placeholder={t('fields.place.placeholder')}
                />
                <DatePicker
                  formikName='time'
                  dateOptions={date.options.shortT()}
                  minimumDate={new Date()}
                  label={t('fields.time.label')}
                  placeholder={t('fields.time.placeholder')}
                  mode='time'
                />
                <DatePicker
                  formikName='date'
                  dateOptions={date.options.shortD()}
                  minimumDate={new Date()}
                  label={t('fields.date.label')}
                  placeholder={t('fields.date.placeholder')}
                  mode='date'
                />
              </View>
            </View>
            <View style={styles.actions}>
              <AppButton
                title={t('common:to_main')}
                style={styles.button}
                onPress={handleToMain}
              />
              <AppButton
                title={t('submit')}
                style={styles.button}
                onPress={() => handleSubmit()}
              />
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
});

BookingScreen.displayName = 'BookingScreen';
