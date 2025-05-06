import React, { useState } from 'react';
import InputView from '@/components/input/InputView';
import globalStyles from '@/constants/styles';
import { StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

interface DateInputProps {
  minimumDate?: Date;
  maximumDate?: Date;
  currentDate?: Date;
}

function DateInput({
  minimumDate,
  maximumDate,
  currentDate = new Date(),
}: Readonly<DateInputProps>) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(currentDate);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const formatDateToIndonesian = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleDateString('id-ID', options);
  };

  return (
    <>
      <InputView style={styles.inputView}>
        <TextInput
          textContentType={'dateTime'}
          style={[globalStyles.textInput, styles.input]}
          value={formatDateToIndonesian(date)}
          editable={false}
        />
        <TouchableWithoutFeedback onPress={() => setShowDatePicker(true)}>
          <Ionicons
            name="calendar"
            size={18}
            color="#006970"
            style={styles.icon}
          />
        </TouchableWithoutFeedback>
      </InputView>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChange}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          locale="id-ID"
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 6,
    fontSize: 12,
  },
  icon: {
    marginLeft: 8,
    padding: 8,
  },
});

export default DateInput;
