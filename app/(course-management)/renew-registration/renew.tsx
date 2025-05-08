import React from 'react';
import ScrollScreen from '@/components/ScrollScreen';
import FormPageTitle from '@/components/text/FormPageTitle';
import CardForm from '@/components/card/CardForm';
import { StyleSheet, View } from 'react-native';
import DataDisplayText from '@/components/text/DataDisplayText';
import TextInputCardForm from '@/components/input/TextInputCardForm';
import RadioButtonCardForm from '@/components/input/RadioButtonCardForm';
import Button from '@/components/button/Button';
import { useRouter } from 'expo-router';

function Renew() {
  const router = useRouter();

  return (
    <ScrollScreen style={styles.container}>
      <FormPageTitle text={'Pendaftaran Ulang'} />
      <CardForm title={'Detail'} style={styles.cardForm}>
        <View style={styles.wrap}>
          <DataDisplayText
            style={styles.dataDisplayText}
            label={'ID SIswa'}
            text={'202020212'}
          />
          <DataDisplayText
            style={styles.dataDisplayText}
            label={'Program'}
            text={'Tahsin Dasar'}
          />
          <DataDisplayText
            style={styles.dataDisplayText}
            label={'Nama Lengkap'}
            text={'Amanda Fadil'}
          />
          <DataDisplayText
            style={styles.dataDisplayText}
            label={'Term'}
            text={'2020/2024'}
          />
        </View>
        <TextInputCardForm
          label={'Nomor Telepon'}
          textContentType={'telephoneNumber'}
          keyboardType={'phone-pad'}
          value={'+62'}
        />
        <TextInputCardForm
          label={'Email'}
          textContentType={'emailAddress'}
          placeholder={'email@mail.com'}
        />
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
      </CardForm>
      <Button
        text={'Selanjutnya'}
        onPress={() =>
          router.navigate('/(course-management)/renew-registration/review')
        }
      />
    </ScrollScreen>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 18,
    borderBottomWidth: 1,
    borderColor: '#eaeaea',
    flexWrap: 'wrap',
    paddingBottom: 15,
  },
  dataDisplayText: {
    width: '46%',
  },
  cardForm: {
    gap: 15,
  },
  container: {
    paddingVertical: 24,
    gap: 24,
  },
});

export default Renew;
