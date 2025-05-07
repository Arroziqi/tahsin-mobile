import React from 'react';
import { StyleSheet, View } from 'react-native';
import MediumButton from '@/components/button/MediumButton';
import colors from '@/constants/colors';

function PrevNextButton() {
  return (
    <View style={styles.container}>
      <MediumButton
        text={'Sebelumnya'}
        color={colors.C06}
        style={{ opacity: 0.6 }}
      />
      <MediumButton text={'Selanjutnya'} color={colors.C06} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default PrevNextButton;
