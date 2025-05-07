import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';

export interface InputLabelTextProps {
  text: string;
  note?: string;
  style?: StyleProp<TextStyle>;
}

function InputLabelText({ text, note, style }: Readonly<InputLabelTextProps>) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{text}</Text>
      {note && <Text style={styles.note}>{note}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  text: {
    textAlign: 'left',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  note: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: 'rgba(41, 53, 63, 57)',
  },
});

export default InputLabelText;
