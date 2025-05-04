import CustomModal from '@/components/modal/CustomModal';
import React from 'react';
import { Text, View } from 'react-native';
import Button from '@/components/button/Button';
import { Image } from 'expo-image';
import { stylesModal } from '@/components/modal/WarningModal';

interface RegistrationSuccessModalProps {
  isVisible?: boolean;
}

function RegistrationSuccessModal({
  isVisible = false,
}: Readonly<RegistrationSuccessModalProps>) {
  const [visible, setVisible] = React.useState(isVisible);

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
      content={<Text style={stylesModal.content}>Pendaftaran Berhasil</Text>}
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

export default RegistrationSuccessModal;
