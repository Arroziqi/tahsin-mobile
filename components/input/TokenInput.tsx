import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

function TokenInput() {
  return (
    <View style={styles.container}>
      {[0, 1, 2, 3].map((index) => (
        <View key={index} style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    borderRadius: 5,
    width: 48,
    height: 48,
    backgroundColor: '#f0f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 24,
  },
});

export default TokenInput;
