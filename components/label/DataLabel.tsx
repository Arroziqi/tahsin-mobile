import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

interface DataLabelProps {
  label: string;
  style?: StyleProp<TextStyle>;
}

function DataLabel({ label, style }: Readonly<DataLabelProps>) {
  return <Text style={[styles.text, style]}>{label}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#a6a6a6',
  },
});

export default DataLabel;
