import { Image, ImageSource } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IconTabProps {
  text: string;
  icon: ImageSource;
  active?: boolean;
}

function IconTab({ icon, text, active = false }: IconTabProps) {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});

export default IconTab;
