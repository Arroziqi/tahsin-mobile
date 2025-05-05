import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface FormTitleProps {
  text: string;
  color?: string;
}

function FormTitle({ text, color = '#006970' }: Readonly<FormTitleProps>) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: '#006970' }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default FormTitle;
