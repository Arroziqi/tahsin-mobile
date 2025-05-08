import CustomModal from '@/components/modal/CustomModal';
import React from 'react';
import { Text, View } from 'react-native';
import Button from '@/components/button/Button';
import { Image } from 'expo-image';
import { stylesModal } from '@/components/modal/WarningModal';

interface RenewelRegistrationSuccessModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  term: string;
  email: string;
}

function RenewelRegistrationSuccessModal({
  isVisible = false,
  setIsVisible,
  term,
  email,
}: Readonly<RenewelRegistrationSuccessModalProps>) {
  return (
    <CustomModal
      visible={isVisible}
      onClose={() => setIsVisible(!isVisible)}
      header={
        <Image
          source={require('@/assets/images/icons/check.png')}
          style={stylesModal.header}
        />
      }
      content={
        <Text style={stylesModal.content}>
          {`Pendaftaran ulang Anda untuk \n term ` +
            term +
            ` telah berhasil. \n \n Email konfirmasi telah dikirim ke ` +
            email}
        </Text>
      }
      footer={
        <View style={stylesModal.footer}>
          <Button
            style={stylesModal.button}
            text="Selesai"
            onPress={() => setIsVisible(!isVisible)}
            textStyle={stylesModal.textStyle}
          />
        </View>
      }
    />
  );
}

export default RenewelRegistrationSuccessModal;
