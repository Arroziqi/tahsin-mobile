import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface CardViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function CardView({ children, style }: Readonly<CardViewProps>) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 13,
    gap: 10,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowColor: '#d0c1c1',
    shadowRadius: 30,
    elevation: 2,
    backgroundColor: 'white',
  },
});

export default CardView;
