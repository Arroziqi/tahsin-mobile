import React from 'react';
import CardView from '@/components/card/CardView';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '@/constants/colors';
import globalStyles from '@/constants/styles';

export type LearningResultItemType = {
  item: string;
  score: string;
};

interface LearningResultCardProps {
  data: LearningResultItemType[];
}

function LearningResultCard({ data }: Readonly<LearningResultCardProps>) {
  return (
    <View style={[globalStyles.flexWrap, styles.container]}>
      {data.map(({ item, score }, index) => (
        <CardView key={index + 1} style={styles.cardView}>
          <Feather name={'book-open'} size={24} color={colors.C02} />
          <Text style={styles.text}>{item}</Text>
          <Text style={styles.score}>{score}</Text>
        </CardView>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    justifyContent: 'space-between',
    width: '100%',
  },
  cardView: {
    alignItems: 'center',
    gap: 4,
    width: 161,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: colors.C02,
  },
  score: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: colors.C02,
  },
});

export default LearningResultCard;
