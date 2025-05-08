import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import colors from '@/constants/colors';

interface NavBackTopBarProps {
  title: string;
}

function NavBackTopBar({ title }: Readonly<NavBackTopBarProps>) {
  const router: Router = useRouter();

  return (
    <View style={styles.container}>
      <Feather
        onPress={() => router.back()}
        name={'arrow-left'}
        size={24}
        color={'white'}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingTop: 32,
    paddingHorizontal: 24,
    backgroundColor: colors.C02,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    gap: 22,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: 'white',
  },
});

export default NavBackTopBar;
