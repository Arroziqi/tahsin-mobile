import React from 'react';
import ScrollScreen from '@/components/ScrollScreen';
import { StyleSheet } from 'react-native';
import StepProgressIndicator from '@/components/indicator/StepProgressIndicator';
import CardForm from '@/components/card/CardForm';
import TextInputCardForm from '@/components/input/TextInputCardForm';
import DateInput from '@/components/input/DateInput';
import InputSelect from '@/components/input/InputSelect';

function Registration() {
  return (
    <ScrollScreen style={styles.container}>
      <StepProgressIndicator
        title={'Pendaftaran Kelas'}
        currentStep={2}
        totalStep={5}
      />
      <CardForm title={'Data Diri'}>
        <TextInputCardForm
          placeholder={'Masukkan nama lengkap Anda'}
          label={'Name Lengkap*'}
        />
        <DateInput currentDate={new Date('2021-01-01')} />
        <InputSelect
          data={[
            { label: 'Tahsin Dasar', value: '1' },
            { label: 'Tahsin Menengah', value: '2' },
            { label: 'Tahsin Lanjutan', value: '3' },
          ]}
          placeholder={'Pilih Program'}
          label={'Pendidikan terakhir*'}
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
