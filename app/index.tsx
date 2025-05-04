import { ScrollView, StatusBar, View } from 'react-native';
import SplashScreenImage from '@/components/img/SplashScreenImage';
import SplashScreenText from '@/components/text/SplashScreenText';
import SplashContent from '@/contents/splashContent';
import Button from '@/components/button/Button';
import InputLabelText from '@/components/text/InputLabelText';
import CustomTextInput from '@/components/input/TextInput';
import React from 'react';
import TextLink from '@/components/text/TextLink';
import Card from '@/components/card/Card';
import colors from '@/constants/colors';
import IconTab from '@/components/bottom-tabs/IconTab';
import OnsiteRegistrationSuccessModal from '@/components/modal/OnsiteRegistrationSuccessModal';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const [text, onChangeText] = React.useState('Useless Text');
  const [password, setPassword] = React.useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <SplashScreenImage
            imgUrl={require('@/assets/images/splash-screen/IMG SP1.png')}
          />
          <SplashScreenText text={SplashContent[2].text} />
          <Button text={'Masuk'} />
          <InputLabelText text={'Username'} />
          <CustomTextInput
            onChangeText={(text) => {
              console.log(text);
            }}
            value={text}
          />
          <InputLabelText text={'Password'} />
          <CustomTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            textContentType="password"
            secureTextEntry
            showValidation
          />
          <TextLink text={'Masuk'} url={'https://www.google.com'} />
          <Card
            title={'Mulai Perjalanan Belajar Al-Quran Anda!'}
            description={
              'Mulai perjalanan belajar Al-Quran Anda bersama pengajar berpengalaman di Tahsin App. Tingkatkan kualitas bacaan dengan metode yang sistematis dan menyenangkan.'
            }
            backgroundColor={colors.C06}
            titleStyle={{ color: colors.C04, alignSelf: 'center' }}
            descriptionStyle={{ color: 'white' }}
          />
          <IconTab
            text={'Beranda'}
            icon={require('@/assets/images/bottom-bar/home-active.png')}
          />
          {/*<WarningModal isVisible={true} />*/}
          {/*<RegistrationSuccessModal isVisible={true} />*/}
          <OnsiteRegistrationSuccessModal
            isVisible={true}
            date={'Senin, 26 Juni 2024'}
            time={'09:00'}
            place={'Masjid Al-Ihsan'}
            email={'ahmad@gmail.com'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
