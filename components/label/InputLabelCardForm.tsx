import React from 'react';
import InputLabelText, {
  InputLabelTextProps,
} from '@/components/label/InputLabelText';
import { StyleSheet } from 'react-native';

function InputLabelCardForm(props: Readonly<InputLabelTextProps>) {
  return <InputLabelText text={props.text} style={styles.text} />;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
});

export default InputLabelCardForm;
