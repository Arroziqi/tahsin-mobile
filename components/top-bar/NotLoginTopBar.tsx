import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import MediumButton from '@/components/button/MediumButton';
import { Router, useRouter } from 'expo-router';

function NotLoginTopBar() {
  const router: Router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable>
        <FontAwesome name="bars" size={33} />
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
  },
});

export default NotLoginTopBar;
