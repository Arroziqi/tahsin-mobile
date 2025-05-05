import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '@/components/button/Button';
import TextLink from '@/components/text/TextLink';
import { useRouter } from 'expo-router';
import TokenInput from '@/components/input/TokenInput';

interface VerificationProps {
  email: string;
}

function Verification({
  email = 'amanda***@email.com',
}: Readonly<VerificationProps>) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.contentWrapper}>
          <Text style={styles.heading}>Masukkan 4-digit kode</Text>
          <Text style={styles.description}>
            {`Masukkan kode verifikasi yang dikirimkan melalui email kamu ` +
              email}
          </Text>
          <TextLink text={'Ganti email?'} />
        </View>
        <TokenInput />
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <Text style={{ fontSize: 12 }}>Belum menerima kode? </Text>
          <TextLink text={'Kirim ulang kode'} style={styles.textLink} />
        </View>
        <Button style={styles.button} text={'Daftar'} />
      </View>
      <Text style={styles.text}>{`By signing up, you agree to snap \n`}</Text>
      <View style={styles.textContainer}>
        <TextLink
          style={[styles.text, { textDecorationLine: 'underline' }]}
          text={'Terms of Service'}
          onPress={() => router.navigate('https://www.google.com')}
        />
        <Text style={styles.text}>{` and `}</Text>
        <TextLink
          style={[styles.text, { textDecorationLine: 'underline' }]}
          text={'Privacy Policy'}
          onPress={() => router.navigate('https://www.google.com')}
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
  },
  contentWrapper: {
    gap: 5,
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    lineHeight: 24,
  },
  description: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#848484',
  },
  formContainer: {
    gap: 23,
    width: 327,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -20,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    lineHeight: 16,
    color: '#4f4f4f',
  },
  button: {
    marginTop: 22,
    marginBottom: 19,
  },
  textLink: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});

export default Verification;
