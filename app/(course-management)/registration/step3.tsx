import React from 'react';
import ScrollScreen from '@/components/ScrollScreen';
import StepProgressIndicator from '@/components/indicator/StepProgressIndicator';
import { StyleSheet } from 'react-native';
import CardForm from '@/components/card/CardForm';
import PrevNextButton from '@/components/button/PrevNextButton';
import DataDisplayText from '@/components/text/DataDisplayText';
import CardView from '@/components/card/CardView';
import DataText from '@/components/text/DataText';
import CustomCheckbox from '@/components/CustomCheckbox';

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
      <CardView style={styles.cardView}>
        <DataText style={{ marginLeft: 26 }} text={'Persutujuan Data'} />
        <CustomCheckbox
          label={
            'Saya menyatakan bahwa data yang saya masukkan adalah benar dan saya setuju dengan syarat dan ketentuan yang berlaku.'
          }
        />
      </CardView>
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
  cardView: {
    paddingVertical: 17,
    paddingHorizontal: 17,
    gap: 5,
    backgroundColor: 'white',
  },
});

export default Step3;
