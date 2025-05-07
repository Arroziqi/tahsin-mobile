import React, { useMemo, useState } from 'react';
import RadioGroup, {
  RadioButtonProps,
  RadioGroupProps,
} from 'react-native-radio-buttons-group';
import colors from '@/constants/colors';
import { StyleSheet } from 'react-native';

function RadioButton({
  radioButtons,
  containerStyle,
  ...rest
}: Readonly<RadioGroupProps>) {
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const radioButtonsData: RadioButtonProps[] = useMemo(
    () =>
      radioButtons.map((item: RadioButtonProps) => ({
        ...item,
        color: colors.C06,
        borderColor: '#C3c3C3',
        size: 20,
      })),
    [radioButtons],
  );

  return (
    <RadioGroup
      radioButtons={radioButtonsData}
      onPress={setSelectedId}
      selectedId={selectedId}
      containerStyle={[styles.container, containerStyle]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
});

export default RadioButton;
