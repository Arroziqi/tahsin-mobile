import React from 'react';
import ScrollScreen from '@/components/ScrollScreen';
import StepProgressIndicator from '@/components/indicator/StepProgressIndicator';
import { StyleSheet } from 'react-native';
import PrevNextButton from '@/components/button/PrevNextButton';
import CardInput from '@/components/card/CardInput';
import MediumButton from '@/components/button/MediumButton';
import { Feather } from '@expo/vector-icons';

function Step2() {
  return (
    <ScrollScreen style={styles.container}>
      <StepProgressIndicator
        title={'Pendaftaran Kelas'}
        currentStep={2}
        totalStep={3}
      />

      <CardInput
        title={'Unggah Rekaman Suara'}
        description={'Rekam bacaan Anda untuk Surah Al-Fatihah'}
        note={'Ukuran maksimal: 10MB\n' + 'Format yang disarankan: MP3, WAV'}
      >
        <MediumButton
          leadingIcon={<Feather name={'upload'} size={18} color={'white'} />}
          style={{ width: 247 }}
          text={'Unggah Dokumen'}
        />
      </CardInput>

      <CardInput
        title={'Penilaian Tatap Muka'}
        description={'Pilih jadwal untuk penilaian langsung di masjid'}
      >
        <MediumButton style={{ width: 247 }} text={'Lihat Jadwal Transaksi'} />
      </CardInput>

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

export default Step2;
