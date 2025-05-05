import React from 'react';
import { StyleSheet, View } from 'react-native';

function Screen(props: Readonly<{ children: React.ReactNode }>) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
  },
});

export default Screen;
