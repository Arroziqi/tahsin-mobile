import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import InputView from '@/components/input/InputView';
import colors from '@/constants/colors';

type DropdownItem = {
  label: string;
  value: string;
};

export interface CustomDropdownProps {
  data: DropdownItem[];
  placeholder: string;
}

function CustomDropdown({ data, placeholder }: Readonly<CustomDropdownProps>) {
  const [value, setValue] = useState(null);

  return (
    <InputView>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.text}
        selectedTextStyle={styles.text}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
        containerStyle={styles.containerStyle}
        itemContainerStyle={styles.itemContainerStyle}
        fontFamily={'Poppins-Regular'}
        itemTextStyle={styles.text}
        activeColor={colors['not-filled']}
      />
    </InputView>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    width: '100%',
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  text: {
    fontSize: 12,
  },
  containerStyle: {
    borderRadius: 8,
    marginTop: 5,
  },
  itemContainerStyle: {},
});

export default CustomDropdown;
