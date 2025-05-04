import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SplashScreenTextProps {
  text: string;
}

function SplashScreenText({ text }: Readonly<SplashScreenTextProps>) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#8789A3',
    textAlign: 'center',
  },
});

export default SplashScreenText;
