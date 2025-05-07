import React from 'react';
import ScrollScreen from '@/components/ScrollScreen';
import StepProgressIndicator from '@/components/indicator/StepProgressIndicator';
import { StyleSheet } from 'react-native';
import CardForm from '@/components/card/CardForm';
import PrevNextButton from '@/components/button/PrevNextButton';
import DataDisplayText from '@/components/text/DataDisplayText';

function Step3() {
  return (
    <ScrollScreen style={styles.container}>
      <StepProgressIndicator
        title={'Pendaftaran Kelas'}
        currentStep={3}
        totalStep={3}
      />
      <CardForm style={styles.cardWrap} title={'Data Diri'}>
        <DataDisplayText label={'Nama Lengkap'} text={'Ahmad Fadil'} />
        <DataDisplayText label={'Tanggal Lahir'} text={'20-12-2004'} />
        <DataDisplayText label={'Nomor Telepon'} text={'+628574758968'} />
      </CardForm>
      <CardForm style={styles.cardWrap} title={'Informasi Akademik'}>
        <DataDisplayText label={'Nama nama Lengkap'} text={'Ahmad Fadil'} />
        <DataDisplayText label={'Waktu Belajar'} text={'20-12-2004'} />
        <DataDisplayText label={'Nomor Telepon'} text={'+628574758968'} />
      </CardForm>
      <CardForm style={styles.cardWrap} title={'Preferensi Belajar'}>
        <DataDisplayText label={'Nama nama Lengkap'} text={'Ahmad Fadil'} />
        <DataDisplayText label={'Waktu Belajar'} text={'20-12-2004'} />
        <DataDisplayText label={'Nama nama Lengkap'} text={'Ahmad Fadil'} />
      </CardForm>
      <CardForm title={'Penilaian Bacaan AL-Quran'}>
        <DataDisplayText label={'Nama nama Lengkap'} text={'Ahmad Fadil'} />
        <DataDisplayText label={'Waktu Belajar'} text={'20-12-2004'} />
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
  cardWrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Step3;
