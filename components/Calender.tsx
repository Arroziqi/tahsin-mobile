import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from 'react-native-ui-datepicker';

interface CalenderProps {
  selected: DateType;
  setSelected: (calender: DateType) => void;
}

function Calendar({ selected, setSelected }: Readonly<CalenderProps>) {
  const defaultStyles = useDefaultStyles();

  return (
    <DateTimePicker
      mode="single"
      date={selected}
      minDate={new Date()}
      onChange={({ date }) => setSelected(date)}
      styles={{
        ...defaultStyles,
        today: { backgroundColor: 'transparent' },
        today_label: { color: '#007AFF' },
        selected: {
          backgroundColor: 'rgba(0, 122, 255, 0.1)',
          borderRadius: '50%',
        },
        selected_label: { color: '#007AFF' },
        days: { backgroundColor: '#f0f5f5' },
        day: {},
        day_label: { color: '#000' },
        header: { backgroundColor: '#f0f5f5' },
        month_label: { color: '#000' },
      }}
    />
  );
}

export default Calendar;
