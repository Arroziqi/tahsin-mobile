import React from 'react';
import CardView from '@/components/card/CardView';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from '@/constants/styles';
import { Feather } from '@expo/vector-icons';

interface ScheduleCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  teacher: string;
}

function ScheduleCard({
  title,
  date,
  teacher,
  time,
  location,
}: Readonly<ScheduleCardProps>) {
  return (
    <CardView style={styles.cardView}>
      <Text style={styles.title}>{title}</Text>
      <View style={[globalStyles.flexWrap, styles.contentContainer]}>
        <Text style={[globalStyles.flexWrapItem, styles.date]}>{date}</Text>
        <View style={[globalStyles.flexWrapItem, styles.itemContainer]}>
          <Feather name={'user'} size={17} color={'#4f4f4f'} />
          <Text style={styles.itemText}>{teacher}</Text>
        </View>
        <View style={[globalStyles.flexWrapItem, styles.itemContainer]}>
          <Feather name={'clock'} size={17} color={'#4f4f4f'} />
          <Text style={styles.itemText}>{time}</Text>
        </View>
        <View style={[globalStyles.flexWrapItem, styles.itemContainer]}>
          <Feather name={'video'} size={17} color={'#4f4f4f'} />
          <Text style={styles.itemText}>{location}</Text>
        </View>
      </View>
    </CardView>
  );
}

const styles = StyleSheet.create({
  cardView: {
    paddingHorizontal: 22,
    paddingVertical: 15,
    gap: 2,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#006970',
  },
  date: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#a6a6a6',
  },
  contentContainer: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  itemText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#4f4f4f',
  },
});

export default ScheduleCard;
