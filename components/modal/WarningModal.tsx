import CustomModal from '@/components/modal/CustomModal';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '@/components/button/Button';
import { Image } from 'expo-image';

interface WarningModalProps {
  isVisible?: boolean;
}

function WarningModal({ isVisible = false }: Readonly<WarningModalProps>) {
  const [visible, setVisible] = React.useState(isVisible);

  return (
    <CustomModal
      visible={visible}
      onClose={() => setVisible(false)}
      header={
        <Image
          source={require('@/assets/images/icons/question.png')}
          style={stylesModal.header}
        />
      }
      content={
        <Text style={stylesModal.content}>
          Apakah Anda yakin ingin mengirimkan pendaftaran Anda untuk periode
          saat ini?
        </Text>
      }
      footer={
        <View style={stylesModal.footer}>
          <Button
            style={stylesModal.button}
            text="Cek Ulang"
            onPress={() => setVisible(false)}
            textStyle={stylesModal.textStyle}
          />
          <Button
            style={stylesModal.button}
            text="Ya, Yakin"
            onPress={() => setVisible(false)}
            textStyle={stylesModal.textStyle}
          />
        </View>
      }
    />
  );
}

export const stylesModal = StyleSheet.create({
  header: {
    width: 64,
    height: 64,
    objectFit: 'cover',
  },
  content: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    lineHeight: 27,
    color: '#4B4B4B',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    gap: 34,
    justifyContent: 'center',
  },
  button: {
    width: 109,
    paddingHorizontal: 22,
    paddingVertical: 10,
    height: 41,
  },
  textStyle: {
    fontSize: 14,
  },
});

export default WarningModal;
