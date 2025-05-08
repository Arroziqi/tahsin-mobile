import React from 'react';
import ScrollScreen from '@/components/ScrollScreen';
import FormPageTitle from '@/components/text/FormPageTitle';
import CardForm from '@/components/card/CardForm';
import { StyleSheet, View } from 'react-native';
import DataDisplayText from '@/components/text/DataDisplayText';
import Button from '@/components/button/Button';
import RenewelRegistrationSuccessModal from '@/components/modal/RenewelRegistrationSuccessModal';

function Review() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <ScrollScreen style={styles.container}>
        <FormPageTitle text={'Review Pendaftaran Ulang'} />
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
          <View style={{ gap: 18 }}>
            <DataDisplayText label={'Email'} text={'email@mail.com'} />
            <DataDisplayText label={'Nomor Telepon'} text={'+62876763656'} />
            <DataDisplayText label={'Jenis Kelas'} text={'Online'} />
            <DataDisplayText
              label={'Waktu Belajar'}
              text={'Pagi (08.00-11.00)'}
            />
          </View>
        </CardForm>
        <Button
          text={'Konfirmasi Pendaftaran'}
          onPress={() => setShowModal(!showModal)}
        />
      </ScrollScreen>

      <RenewelRegistrationSuccessModal
        term={'2024/2025'}
        email={'email@mail.com'}
        isVisible={showModal}
        setIsVisible={setShowModal}
      />
    </>
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

export default Review;
