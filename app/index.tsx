import { ScrollView, StatusBar, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Router, useRouter } from 'expo-router';
import Button from '@/components/button/Button';

export default function Index() {
  const router: Router = useRouter();

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
          <Button
            onPress={() => router.navigate('/onboarding')}
            text={'Go To Splash Screen'}
          />
          ;{' '}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
