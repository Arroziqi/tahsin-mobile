import React from 'react';
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from 'react-native';

interface ScrollScreenProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function ScrollScreen({ children, style }: Readonly<ScrollScreenProps>) {
  return (
    <ScrollView contentContainerStyle={[styles.container, style]}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
});

export default ScrollScreen;
