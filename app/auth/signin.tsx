import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputLabelText from '@/components/label/InputLabelText';
import TextInput from '@/components/input/CustomTextInput';
import Button from '@/components/button/Button';
import TextLink from '@/components/text/TextLink';
import { useRouter } from 'expo-router';
import PasswordInput from '@/components/input/PasswordInput';

function Signin() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputForm}>
          <InputLabelText text={'Username'} />
          <TextInput />
        </View>
        <View style={styles.inputForm}>
          <InputLabelText text={'Password'} />
          <PasswordInput />
        </View>
        <Button
          style={styles.button}
          text={'Masuk'}
          onPress={() => router.navigate('/(tabs)/home-login')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Belum punya akun? </Text>
        <TextLink
          text={'Daftar'}
          onPress={() => router.navigate('/auth/signup')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 45,
  },
  formContainer: {
    gap: 23,
    width: 327,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputForm: {},
  text: {},
  button: {
    marginTop: 22,
  },
});

export default Signin;
