import React from 'react';
import { StyleSheet, View } from 'react-native';
import InputLabelCardForm from '@/components/label/InputLabelCardForm';
import DateInput, { DateInputProps } from '@/components/input/DateInput';

interface DateInputCardFormProps extends DateInputProps {
  label: string;
}

function DateInputCardForm({
  label,
  ...rest
}: Readonly<DateInputCardFormProps>) {
  return (
    <View style={styles.container}>
      <InputLabelCardForm text={label} />
      <DateInput {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 9,
  },
});

export default DateInputCardForm;
