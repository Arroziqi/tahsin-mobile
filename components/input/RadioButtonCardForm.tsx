import React from 'react';
import { StyleSheet, View } from 'react-native';
import InputLabelCardForm from '@/components/label/InputLabelCardForm';
import RadioButton from '@/components/input/RadioButton';
import { RadioGroupProps } from 'react-native-radio-buttons-group';

interface RadioButtonCardFormProps extends RadioGroupProps {
  label: string;
}

function RadioButtonCardForm({
  label,
  radioButtons,
}: Readonly<RadioButtonCardFormProps>) {
  return (
    <View style={styles.container}>
      <InputLabelCardForm text={label} />
      <RadioButton
        containerStyle={styles.radioButton}
        radioButtons={radioButtons}
        labelStyle={styles.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 7,
  },
  radioButton: {},
  text: {
    fontSize: 12,
    flex: 1,
  },
});

export default RadioButtonCardForm;
