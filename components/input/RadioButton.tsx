import React, { useMemo, useState } from 'react';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import colors from '@/constants/colors';

type radioItem = {
  id: string;
  label: string;
  value: string;
};

interface DataRadioButtons {
  data: radioItem[];
}

function RadioButton({ data }: Readonly<DataRadioButtons>) {
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const radioButtons: RadioButtonProps[] = useMemo(
    () =>
      data.map((item: radioItem) => ({
        ...item,
        color: colors.C06,
        borderColor: '#C3c3C3',
      })),
    [data],
  );

  return (
    <RadioGroup
      radioButtons={radioButtons}
      onPress={setSelectedId}
      selectedId={selectedId}
    />
  );
}

export default RadioButton;
