import React from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface ScrollScreenProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function ScrollScreen({ children, style }: Readonly<ScrollScreenProps>) {
  return (
    <View style={[{ flex: 1, backgroundColor: 'white' }]}>
      <ScrollView contentContainerStyle={[styles.container, style]}>
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
});

export default ScrollScreen;
