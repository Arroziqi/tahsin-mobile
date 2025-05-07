import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import FormTitle from '@/components/text/FormTitle';
import { Feather } from '@expo/vector-icons';
import colors from '@/constants/colors';
import CardView from '@/components/card/CardView';

interface CardInputProps {
  title: string;
  description?: string;
  titleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  children?: React.ReactNode;
  note?: string;
  icon?: React.ReactNode;
}

function CardInput({
  title,
  description,
  descriptionStyle,
  titleStyle,
  style,
  backgroundColor = 'white',
  children,
  note,
  icon = <Feather name={'file'} size={24} color={colors.C06} />,
}: Readonly<CardInputProps>) {
  return (
    <CardView style={[styles.container, { backgroundColor }, style]}>
      <View style={styles.imageContainer}>{icon}</View>
      <FormTitle style={[styles.title, titleStyle]} text={title} />
      {description && (
        <Text style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      )}
      {note && <Text style={styles.note}>{note}</Text>}
      {children}
    </CardView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    paddingHorizontal: 24,
    gap: 20,
    alignItems: 'center',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#3C3C43',
    textAlign: 'center',
  },
  note: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#a1a1a1',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    height: 44,
    borderRadius: '50%',
    backgroundColor: '#DDE6E8',
  },
});

export default CardInput;
