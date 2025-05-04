import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

function CustomModal({
  visible,
  onClose,
  header,
  content,
  footer,
}: Readonly<CustomModalProps>) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalWrapper}>
          <TouchableWithoutFeedback>
            {/* prevent closing modal when touched inside */}
            <KeyboardAvoidingView
              style={styles.modalContainer}
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
              {header && <View style={styles.header}>{header}</View>}
              {content && <View style={styles.content}>{content}</View>}
              {footer && <View style={styles.footer}>{footer}</View>}
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 28,
    elevation: 5,
    alignItems: 'center',
    gap: 32,
    width: '90%',
  },
  header: {},
  content: {
    width: '100%',
  },
  footer: {
    width: '100%',
  },
});

export default CustomModal;
