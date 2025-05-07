import React from 'react';
import Screen from '@/components/Screen';
import Button from '@/components/button/Button';
import { useRouter } from 'expo-router';

function RenewRegistration() {
  const router = useRouter();

  return (
    <Screen>
      <Button
        text={'go to pendaftaran ulang'}
        onPress={() =>
          router.navigate('/(course-management)/renew-registration/renew')
        }
      />
      <Button
        text={'go to review pendaftaran ulang'}
        onPress={() =>
          router.navigate('/(course-management)/renew-registration/renew')
        }
      />
    </Screen>
  );
}

export default RenewRegistration;
