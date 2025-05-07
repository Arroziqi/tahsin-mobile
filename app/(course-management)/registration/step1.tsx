import React from 'react';
import ScrollScreen from '@/components/ScrollScreen';
import StepProgressIndicator from '@/components/indicator/StepProgressIndicator';
import { StyleSheet } from 'react-native';
import CardForm from '@/components/card/CardForm';
import TextInputCardForm from '@/components/input/TextInputCardForm';
import DateInputCardForm from '@/components/input/DateInputCardForm';
import InputSelectCardForm from '@/components/input/InputSelectCardForm';
import RadioButtonCardForm from '@/components/input/RadioButtonCardForm';
import PrevNextButton from '@/components/button/PrevNextButton';

function Step1() {
  return (
    <ScrollScreen style={styles.container}>
      <StepProgressIndicator
        title={'Pendaftaran Kelas'}
        currentStep={1}
        totalStep={3}
      />
      <CardForm title={'Data Diri'}>
        <TextInputCardForm
          label={'Name Lengkap*'}
          placeholder={'Masukan nama lengkap Anda'}
        />
        <DateInputCardForm label={'Tanggal Lahir*'} />
        <TextInputCardForm
          label={'Nomor Telepon'}
          textContentType={'telephoneNumber'}
          keyboardType={'phone-pad'}
          value={'+62'}
        />
        <TextInputCardForm
          label={'Email'}
          textContentType={'emailAddress'}
          placeholder={'email@anda.com'}
        />
      </CardForm>
      <CardForm title={'Informasi Akademik'}>
        <InputSelectCardForm
          label={'Pendidikan Terakhir*'}
          data={[
            { label: 'SMA/Sederajat', value: 'sma' },
            { label: 'Sarjana (S1)', value: 's1' },
            { label: 'Magister (S2)', value: 's2' },
          ]}
          placeholder={'Pilih jenjang pendidikan'}
        />
        <InputSelectCardForm
          label={'Program Pilihan*'}
          data={[
            { label: 'Tahsin Dasar', value: 'dasar' },
            { label: 'Tahsin Menengah', value: 'menengah' },
            { label: 'Tahsin Lanjutan', value: 'lanjutan' },
          ]}
          placeholder={'Pilih jenjang pendidikan'}
        />
      </CardForm>
      <CardForm title={'Preferensi Belajar'}>
        <RadioButtonCardForm
          label={'Jenis Kelas*'}
          radioButtons={[
            { label: 'Online', value: 'online', id: 'online' },
            { label: 'Offline', value: 'offline', id: 'offline' },
          ]}
        />
        <RadioButtonCardForm
          label={'Waktu Belajar*'}
          radioButtons={[
            { label: 'Pagi (08.00-11.00)', value: 'pagi', id: 'pagi' },
            { label: 'Sore (16.00-19.00)', value: 'sore', id: 'sore' },
          ]}
        />
        <TextInputCardForm
          multiline={true}
          numberOfLines={5}
          label={'Tujuan Belajar*'}
          placeholder={'Apa yang ingin Anda capai dalam program ini?'}
        />
      </CardForm>
      <PrevNextButton />
    </ScrollScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    paddingVertical: 24,
  },
});

export default Step1;
