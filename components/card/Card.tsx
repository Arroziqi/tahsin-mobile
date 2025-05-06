import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import colors from '@/constants/colors';

interface CardProps {
  title: string;
  description: string;
  titleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
}

function Card({
  title,
  description,
  descriptionStyle,
  titleStyle,
  style,
  backgroundColor = colors.C03,
}: Readonly<CardProps>) {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.description, descriptionStyle]}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    paddingVertical: 21,
    paddingHorizontal: 18,
  },
  title: {
    width: '100%',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'left',
    marginBottom: 7,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#3C3C43',
    textAlign: 'justify',
  },
});

export default Card;
