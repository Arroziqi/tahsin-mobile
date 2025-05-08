import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Router, useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import colors from '@/constants/colors';

function LoginTopBar() {
  const router: Router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.hallo}>Assalamualaikum,</Text>
        <Text style={styles.username}>Siti Rahmah</Text>
      </View>
      <Pressable style={styles.notification}>
        <Feather name={'bell'} size={18} color={colors.C06} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 24,
    backgroundColor: colors.C02,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  textContainer: {},
  hallo: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: 'white',
  },
  username: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: 'white',
  },
  notification: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E2FBE8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginTopBar;
