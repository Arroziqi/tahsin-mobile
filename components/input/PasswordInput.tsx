import React from 'react';
import { Pressable, StyleSheet, TextInput, TextInputProps } from 'react-native';
import InputView from '@/components/input/InputView';
import globalStyles from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';

function PasswordInput({
  onChangeText,
  value,
  placeholder,
  style,
  ...rest
}: Readonly<TextInputProps>) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <InputView style={styles.container}>
      <TextInput
        style={[globalStyles.textInput, styles.input, style]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        textContentType={'password'}
        secureTextEntry={!showPassword}
        {...rest}
      />
      <Pressable
        style={styles.eye}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Ionicons
          name={!showPassword ? 'eye' : 'eye-off'}
          size={20}
          color={'#006970'}
        />
      </Pressable>
    </InputView>
  );
}

const styles = StyleSheet.create({
  eye: {
    width: 20,
  },
  input: {
    paddingHorizontal: 6,
  },
  container: {
    paddingHorizontal: 8,
  },
});

export default PasswordInput;
