import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import colors from '@/constants/colors';

export interface ButtonProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  color?: string;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

function Button({
  text,
  disabled = false,
  style,
  textStyle,
  color = colors.C06,
  onPress,
  leadingIcon,
  trailingIcon,
}: Readonly<ButtonProps>) {
  return (
    <TouchableOpacity
      style={[styles.container, style, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {leadingIcon}
      <Text style={[styles.text, textStyle]}>{text}</Text>
      {trailingIcon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: 'white',
  },
});

export default Button;
