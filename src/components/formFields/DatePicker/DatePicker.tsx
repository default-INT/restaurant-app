import { memo, useCallback } from 'react';
import { Field, useFormikContext } from 'formik';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Error } from '../Error';
import { DatePickerField, IDatePickerProps } from './DatePickerField';

interface IProps extends IDatePickerProps {
  formikName?: string
  errorModifiers?: StyleProp<TextStyle>;
  formikModifiers?: StyleProp<ViewStyle>;
}

export const DatePicker = memo((props: IProps) => {
  const { formikName, formikModifiers, errorModifiers, ...pickerProps } = props;
  const { t } = useTranslation();

  if (!formikName) return <DatePickerField {...pickerProps} />;

  return (
    <Field name={formikName}>
      {({ field, meta }: any) => {
        const { setFieldTouched, setFieldValue } = useFormikContext();

        const onChange = useCallback((date: Date) => {
          setFieldValue(formikName, date);
        }, [setFieldValue]);

        const onBlur = useCallback(() => {
          setFieldTouched(formikName, true);
        }, [setFieldTouched]);

        return (
          <View style={formikModifiers}>
            <DatePickerField
              {...meta}
              {...field}
              onBlur={onBlur}
              onChange={onChange}
              {...pickerProps}
            />
            {meta.touched && meta.error && (
              <Error errorMessage={t(meta.error)} modifiers={errorModifiers} />
            )}
          </View>
        );
      }}
    </Field>
  );
});

DatePicker.displayName = 'DatePicker';
