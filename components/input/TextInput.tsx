import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

type TextContentType = React.ComponentProps<
  typeof TextInput
>['textContentType'];

interface CustomTextInputProps extends RNTextInputProps {
  textContentType?: TextContentType;
  secureTextEntry?: boolean;
  minLength?: number;
  showValidation?: boolean;
}

function CustomTextInput({
  onChangeText,
  value,
  placeholder,
  textContentType = 'none',
  secureTextEntry = false,
  minLength = 6,
  showValidation = false,
  ...rest
}: Readonly<CustomTextInputProps>) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const showToggle = textContentType === 'password' || secureTextEntry;

  const isTooShort =
    showValidation &&
    textContentType === 'password' &&
    (value?.length ?? 0) > 0 &&
    (value?.length ?? 0) < minLength;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TextInput
          style={[styles.textInput, showToggle && { paddingRight: 40 }]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          textContentType={textContentType}
          secureTextEntry={showToggle && !isPasswordVisible}
          {...rest}
        />
        {showToggle && (
          <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Feather
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={20}
              color="#333"
            />
          </Pressable>
        )}
      </View>
      {isTooShort && (
        <Text style={styles.errorText}>
          Password must be at least {minLength} characters.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  container: {
    backgroundColor: '#f0f5f5',
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  textInput: {
    flex: 1,
    height: 50,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  iconContainer: {
    position: 'absolute',
    right: 14,
    top: 14,
  },
  errorText: {
    marginTop: 4,
    color: '#e53935',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
});

export default CustomTextInput;
