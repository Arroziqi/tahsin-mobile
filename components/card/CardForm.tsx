import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import FormTitle from '@/components/text/FormTitle';
import CardView from '@/components/card/CardView';

interface CardFormProps {
  title: string;
  description?: string;
  titleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  children?: React.ReactNode;
}

function CardForm({
  title,
  description,
  descriptionStyle,
  titleStyle,
  style,
  backgroundColor = 'white',
  children,
}: Readonly<CardFormProps>) {
  return (
    <CardView style={[styles.container, { backgroundColor }, style]}>
      <FormTitle style={titleStyle} text={title} />
      {description && (
        <Text style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      )}
      {children}
    </CardView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
    paddingHorizontal: 27,
    gap: 10,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#3C3C43',
    textAlign: 'justify',
  },
});

export default CardForm;
