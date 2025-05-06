import React from 'react';
import { StyleSheet, View } from 'react-native';
import InputLabelCardForm from '@/components/text/InputLabelCardForm';
import CustomDropdown, {
  CustomDropdownProps,
} from '@/components/CustomDropdown';

interface InputSelectProps extends CustomDropdownProps {
  label: string;
}

function InputSelect({ label, data, placeholder }: Readonly<InputSelectProps>) {
  return (
    <View style={styles.container}>
      <InputLabelCardForm text={label} />
      <CustomDropdown data={data} placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 9,
  },
});

export default InputSelect;
