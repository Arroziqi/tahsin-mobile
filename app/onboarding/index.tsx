import React, { useMemo } from 'react';
import Onboarding, { Page } from 'react-native-onboarding-swiper';
import { StyleSheet, View } from 'react-native';
import splashContent from '@/contents/splashContent';
import SplashScreenText from '@/components/text/SplashScreenText';
import SplashScreenImage from '@/components/img/SplashScreenImage';
import { useRouter } from 'expo-router';

function Index() {
  const router = useRouter();

  const pages: Page[] = useMemo(
    () =>
      splashContent.map((item) => ({
        backgroundColor: '#fff',
        title: <SplashScreenText text={item.text} />,
        subtitle: '',
        image: <SplashScreenImage imgUrl={item.image} />,
      })),
    [],
  );

  return (
    <View style={styles.container}>
      <Onboarding
        pages={pages}
        showNext={false}
        showSkip={false}
        bottomBarColor={'#fff'}
        onDone={() => router.navigate('/auth/signin')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Index;
