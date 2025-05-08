import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface SwitchButtonProps {
  text1: string;
  text2: string;
}

function SwitchButton({ text1, text2 }: Readonly<SwitchButtonProps>) {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          { backgroundColor: isActive ? 'white' : 'transparent' },
        ]}
        onPress={() => setIsActive(true)}
      >
        <Text style={[styles.text]}>{text1}</Text>
      </Pressable>
      <Pressable
        style={[
          styles.button,
          { backgroundColor: isActive ? 'transparent' : 'white' },
        ]}
        onPress={() => setIsActive(false)}
      >
        <Text style={[styles.text]}>{text2}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    height: 26,
  },
  button: {
    flex: 1,
    paddingVertical: 4,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});

export default SwitchButton;
