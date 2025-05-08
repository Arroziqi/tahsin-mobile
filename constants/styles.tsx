import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 14,
  },
  flexWrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
  },
  flexWrapItem: {
    width: '45%',
  },
});

export default globalStyles;
