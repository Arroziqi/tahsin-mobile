import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface InputLabelTextProps {
  text: string;
}

function InputLabelText({ text }: Readonly<InputLabelTextProps>) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    textAlign: 'left',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#293540',
  },
});

export default InputLabelText;
