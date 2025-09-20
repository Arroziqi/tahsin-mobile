import MediumButton from '@/components/button/MediumButton';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import { Router, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

function NotLoginTopBar() {
  const router: Router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable>
        <FontAwesome name="bars" size={32} />
      </Pressable>
      <MediumButton
        onPress={() => router.navigate('/auth/signin')}
        text={'Masuk'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    paddingTop: 32,
  },
});

export default NotLoginTopBar;
