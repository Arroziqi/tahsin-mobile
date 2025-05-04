import CustomModal from '@/components/modal/CustomModal';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '@/components/button/Button';
import { Image, ImageSource } from 'expo-image';
import { stylesModal } from '@/components/modal/WarningModal';
import BulletItem from '@/components/BulletItem';

interface OnsiteRegistrationSuccessModalProps {
  isVisible?: boolean;
  date: string;
  time: string;
  place: string;
  email: string;
}

function OnsiteRegistrationSuccessModal({
  isVisible = false,
  date,
  time,
  place,
  email,
}: Readonly<OnsiteRegistrationSuccessModalProps>) {
  const [visible, setVisible] = React.useState(isVisible);

  const data: { icon: ImageSource; text: string }[] = [
    {
      icon: require('@/assets/images/icons/calendar.png'),
      text: date,
    },
    {
      icon: require('@/assets/images/icons/clock.png'),
      text: time + ' WIB',
    },
    {
      icon: require('@/assets/images/icons/map-pin.png'),
      text: place,
    },
    {
      icon: require('@/assets/images/icons/mail.png'),
      text: 'Email konfirmasi telah dikirim ke: ' + email,
    },
  ];

  return (
    <CustomModal
      visible={visible}
      onClose={() => setVisible(false)}
      header={
        <Image
          source={require('@/assets/images/icons/check.png')}
          style={stylesModal.header}
        />
      }
      content={
        <View style={styles.contentContainer}>
          <Text style={stylesModal.content}>Pendaftaran Berhasil</Text>
          <View style={styles.detailWrapper}>
            {data.map(
              (item: { icon: ImageSource; text: string }, index: number) => (
                <React.Fragment key={index}>
                  <View style={styles.detail}>
                    <Image style={styles.image} source={item.icon} />
                    <Text style={styles.detailText}>{item.text}</Text>
                  </View>
                  {index === data.length - 2 && (
                    <View style={styles.separator} />
                  )}
                </React.Fragment>
              ),
            )}
          </View>
          <View>
            <Text style={styles.descriptionText}>Langkah Selanjutnya</Text>
            {[
              `Cek email Anda untuk detail lengkap pendaftaran`,
              `Siapkan Al-Quran untuk penilaian`,
              `Datang 15 menit sebelum jadwal yang ditentukan`,
            ].map((item: string, index: number) => (
              <BulletItem
                text={item}
                key={index}
                style={styles.descriptionText}
              />
            ))}
          </View>
        </View>
      }
      footer={
        <View style={stylesModal.footer}>
          <Button
            style={stylesModal.button}
            text="Selesai"
            onPress={() => setVisible(false)}
            textStyle={stylesModal.textStyle}
          />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: 19,
    width: '100%',
    paddingHorizontal: 14,
  },
  detailWrapper: {
    backgroundColor: '#F3F4F6',
    padding: 19,
    gap: 14,
    borderRadius: 6,
  },
  detail: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  image: {
    width: 17,
    height: 17,
    objectFit: 'cover',
  },
  detailText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  descriptionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
});

export default OnsiteRegistrationSuccessModal;
