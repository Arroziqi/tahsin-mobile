import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import InputView from '@/components/input/InputView';
import globalStyles from '@/constants/styles';

function CustomTextInput({
  onChangeText,
  value,
  placeholder,
  style,
  ...rest
}: Readonly<TextInputProps>) {
  return (
    <InputView>
      <TextInput
        style={[globalStyles.textInput, style]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        {...rest}
      />
    </InputView>
  );
}

export default CustomTextInput;
