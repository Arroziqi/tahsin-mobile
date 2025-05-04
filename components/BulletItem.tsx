import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';

interface BulletItemProps {
  text: string;
  style?: StyleProp<TextStyle>;
}

function BulletItem({ text, style }: Readonly<BulletItemProps>) {
  return (
    <View style={styles.bulletItem}>
      <Text style={[style, styles.bulletIcon]}>{'\u2022'}</Text>
      <Text style={[style, styles.bulletText]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bulletIcon: {
    marginHorizontal: 6,
  },
  bulletText: {
    flex: 1,
  },
});

export default BulletItem;
