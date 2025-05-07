import React from 'react';
import ScrollScreen from '@/components/ScrollScreen';
import FormPageTitle from '@/components/text/FormPageTitle';
import CardForm from '@/components/card/CardForm';
import { StyleSheet, View } from 'react-native';
import DataDisplayText from '@/components/text/DataDisplayText';
import TextInputCardForm from '@/components/input/TextInputCardForm';
import RadioButtonCardForm from '@/components/input/RadioButtonCardForm';

function Renew() {
  return (
    <ScrollScreen>
      <FormPageTitle text={'Pendaftaran Ulang'} />
      <CardForm title={'Detail'}>
        <View style={styles.wrap}>
          <DataDisplayText label={'ID SIswa'} text={'2020202'} />
          <DataDisplayText label={'Program'} text={'2020202'} />
          <DataDisplayText label={'Nama Lengkap'} text={'2020202'} />
          <DataDisplayText label={'ID SIswa'} text={'2020202'} />
        </View>
        <TextInputCardForm
          label={'Nomor Telepon'}
          textContentType={'telephoneNumber'}
          keyboardType={'phone-pad'}
          value={'+62'}
        />
        <TextInputCardForm label={'Email'} textContentType={'emailAddress'} />
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
    </ScrollScreen>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 18,
  },
});

export default Renew;
