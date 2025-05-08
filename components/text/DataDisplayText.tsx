import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import DataLabel from '@/components/label/DataLabel';
import DataText from '@/components/text/DataText';

interface DataDisplayTextProps {
  label: string;
  text: string;
  style?: StyleProp<ViewStyle>;
}

function DataDisplayText({
  label,
  text,
  style,
}: Readonly<DataDisplayTextProps>) {
  return (
    <View style={[styles.container, style]}>
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
