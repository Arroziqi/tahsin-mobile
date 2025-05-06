import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface InputViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function InputView({ children, style }: Readonly<InputViewProps>) {
  const flattenedStyle = StyleSheet.flatten([styles.container, style]);

  return <View style={flattenedStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f5f5',
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default InputView;
