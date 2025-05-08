import React from 'react';
import CardView from '@/components/card/CardView';
import { FlexStyle, StyleSheet, Text, View } from 'react-native';
import colors from '@/constants/colors';

export type ProgressItem = {
  item: string;
  percentage: FlexStyle['width'];
};

interface ProgressCardProps {
  data: ProgressItem[];
}

function ProgressCard({ data }: Readonly<ProgressCardProps>) {
  return (
    <CardView style={styles.cardView}>
      {data.map(({ item, percentage }, index) => (
        <View key={index + 1} style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.item}>{item}</Text>
            <Text style={styles.progress}>{percentage?.toString()}</Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: percentage }]}></View>
          </View>
        </View>
      ))}
    </CardView>
  );
}

const styles = StyleSheet.create({
  cardView: {
    paddingHorizontal: 22,
    paddingVertical: 15,
    gap: 15,
  },
  container: {
    gap: 2,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#006970',
  },
  progress: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#a6a6a6',
  },
  progressContainer: {
    backgroundColor: '#e4e4e4',
    borderRadius: 4.5,
    width: '100%',
    height: 9,
  },
  progressBar: {
    backgroundColor: colors.C06,
    borderRadius: 4.5,
    height: 9,
  },
});

export default ProgressCard;
