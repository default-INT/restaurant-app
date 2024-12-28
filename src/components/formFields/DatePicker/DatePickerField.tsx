import { ComponentProps, memo, useCallback, useState } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import RNDatePicker from 'react-native-date-picker';
import { date } from '@root/utils/date';
import { OpacityPressable } from '@root/components/OpacityPressable';
import { isNil } from '@root/utils/isNil';
import { TOptions } from '@root/utils/date/formatDate/formatDate';

import { styles } from './styles';

type TPickerProps = Omit<ComponentProps<typeof RNDatePicker>, 'date'>;

export interface IDatePickerProps extends TPickerProps {
  initialValue?: Date;
  placeholder?: string;
  label?: string;
  style?: StyleProp<ViewStyle>;
  value?: Date | null;
  dateOptions?: TOptions;
  onChange?: (value: Date) => void;
  onBlur?: () => void;
}

export const DatePickerField = memo((props: IDatePickerProps) => {
  const {
    initialValue,
    placeholder,
    value,
    style,
    label,
    onChange,
    onBlur,
    dateOptions,
    ...pickerProps
  } = props;

  const [isEmpty, setIsEmpty] = useState(isNil(initialValue));
  const [selectedDate, setSelectedDate] = useState(initialValue || new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handlePickerPress = useCallback((pickerDate?: Date) => {
    setIsOpen(false);
    if (onBlur) onBlur();
    if (!pickerDate) return;
    if (onChange) onChange(pickerDate);
    setSelectedDate(pickerDate);
    if (!isEmpty) return;
    setIsEmpty(false);
  }, [isEmpty, onBlur, onChange]);

  const displayValue = value || selectedDate;
  const formatedDate = date.formatDate(displayValue.toISOString(), dateOptions);

  return (
    <View style={styles.root}>
      {label && <Text style={styles.label}>{label}</Text>}
      <OpacityPressable style={StyleSheet.compose(styles.container, style)} onPress={handleOpen}>
        <>
          {isEmpty && <Text style={styles.placeholder}>{placeholder}</Text>}
          {!isEmpty && <Text>{formatedDate}</Text>}
        </>
      </OpacityPressable>
      <RNDatePicker
        modal
        open={isOpen}
        date={selectedDate}
        onConfirm={handlePickerPress}
        onCancel={handlePickerPress}
        {...pickerProps}
      />
    </View>
  );
});

DatePickerField.displayName = 'DatePickerField';
