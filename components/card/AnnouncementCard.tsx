import React from 'react';
import CardView from '@/components/card/CardView';
import { StyleSheet, Text, View } from 'react-native';

interface AnnouncementCardProps {
  title: string;
  date: string;
  content: string;
}

function AnnouncementCard({
  title,
  date,
  content,
}: Readonly<AnnouncementCardProps>) {
  return (
    <CardView style={styles.cardView}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.content}>{content}</Text>
    </CardView>
  );
}

const styles = StyleSheet.create({
  cardView: {
    paddingHorizontal: 22,
    paddingVertical: 15,
    gap: 2,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  content: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#4f4f4f',
    textAlign: 'justify',
  },
});

export default AnnouncementCard;
