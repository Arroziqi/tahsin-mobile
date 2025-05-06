import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface FormPageTitleProps {
  text: string;
}

function FormPageTitle({ text }: Readonly<FormPageTitleProps>) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    lineHeight: 24,
  },
});

export default FormPageTitle;
