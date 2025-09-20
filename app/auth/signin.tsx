import Button from '@/components/button/Button';
import TextInput from '@/components/input/CustomTextInput';
import PasswordInput from '@/components/input/PasswordInput';
import InputLabelText from '@/components/label/InputLabelText';
import TextLink from '@/components/text/TextLink';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthApi from '../api/auth/auth';

function Signin() {
  const router = useRouter();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputForm}>
          <InputLabelText text={'Username'} />
          <TextInput onChangeText={setUsername} value={username} />
        </View>
        <View style={styles.inputForm}>
          <InputLabelText text={'Password'} />
          <PasswordInput onChangeText={setPassword} value={password} />
        </View>
        <Button
          style={styles.button}
          text={'Masuk'}
          onPress={() => AuthApi.login(router, username, password)}
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
