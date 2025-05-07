import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

interface DataTextProps {
  text: string;
  style?: StyleProp<TextStyle>;
}

function DataText({ text, style }: Readonly<DataTextProps>) {
  return <Text style={[styles.text, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#4f4f4f',
  },
});

export default DataText;
