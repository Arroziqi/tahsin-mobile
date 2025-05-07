import React from 'react';
import ScrollScreen from '@/components/ScrollScreen';
import { StyleSheet } from 'react-native';
import StepProgressIndicator from '@/components/indicator/StepProgressIndicator';
import CardForm from '@/components/card/CardForm';
import Button from '@/components/button/Button';
import { useRouter } from 'expo-router';

function Registration() {
  const router = useRouter();

  return (
    <ScrollScreen style={styles.container}>
      <StepProgressIndicator
        title={'Pendaftaran Kelas'}
        currentStep={2}
        totalStep={5}
      />
      <CardForm title={'Data Diri'}>
        <Button
          text={'go to step 1'}
          onPress={() => router.navigate('/registration/step1')}
        />
        <Button
          text={'go to step 2'}
          onPress={() => router.navigate('/registration/step2')}
        />
        <Button
          text={'go to step 3'}
          onPress={() => router.navigate('/registration/step3')}
        />
        <Button
          text={'go to renew registration'}
          onPress={() =>
            router.navigate('/(course-management)/renew-registration')
          }
        />
      </CardForm>
    </ScrollScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
});

export default Registration;
