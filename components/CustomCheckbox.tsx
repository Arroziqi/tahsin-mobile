import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import Checkbox from 'expo-checkbox';

interface CustomCheckboxProps {
  label: string;
  textStyle?: StyleProp<TextStyle>;
}

function CustomCheckbox({ label, textStyle }: Readonly<CustomCheckboxProps>) {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setIsChecked}
      />
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: '#4f4f4f',
    textAlign: 'justify',
    flex: 1,
  },
  checkbox: {},
});

export default CustomCheckbox;
