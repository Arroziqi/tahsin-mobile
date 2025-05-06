import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import InputView from '@/components/input/InputView';
import globalStyles from '@/constants/styles';
import InputLabelCardForm from '@/components/text/InputLabelCardForm';

interface TextInputCardFormProps extends TextInputProps {
  label: string;
}

function TextInputCardForm({
  label,
  placeholder,
  ...rest
}: Readonly<TextInputCardFormProps>) {
  return (
    <View style={styles.container}>
      <InputLabelCardForm text={label} />
      <InputView style={styles.inputView}>
        <TextInput
          style={[globalStyles.textInput, styles.input]}
          placeholder={placeholder}
          {...rest}
        />
      </InputView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 9,
  },
  inputView: {
    backgroundColor: '#f0f5f5',
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 9,
    fontSize: 12,
  },
});

export default TextInputCardForm;
