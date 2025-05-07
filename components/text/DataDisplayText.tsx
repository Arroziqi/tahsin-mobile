import React from 'react';
import { StyleSheet, View } from 'react-native';
import DataLabel from '@/components/label/DataLabel';
import DataText from '@/components/text/DataText';

interface DataDisplayTextProps {
  label: string;
  text: string;
}

function DataDisplayText({ label, text }: Readonly<DataDisplayTextProps>) {
  return (
    <View style={styles.container}>
      <DataLabel label={label} />
      <DataText text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
});

export default DataDisplayText;
