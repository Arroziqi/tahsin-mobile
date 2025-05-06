import React from 'react';
import Button, { ButtonProps } from '@/components/button/Button';
import { StyleSheet } from 'react-native';
import colors from '@/constants/colors';

function MediumButton({
  text,
  style,
  color = colors.C02,
  ...rest
}: Readonly<ButtonProps>) {
  return (
    <Button
      text={text}
      style={[styles.button, style]}
      color={color}
      {...rest}
      textStyle={styles.textStyles}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: 118,
    height: 36,
    borderRadius: 12,
    padding: 8,
  },
  textStyles: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default MediumButton;
