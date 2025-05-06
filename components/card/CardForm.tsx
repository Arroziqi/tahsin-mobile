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
    <View style={[styles.container, { backgroundColor }, style]}>
      <FormTitle style={titleStyle} text={title} />
      {description && (
        <Text style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 17,
    paddingHorizontal: 27,
    gap: 10,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowColor: '#d0c1c1',
    shadowRadius: 30,
    elevation: 2,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#3C3C43',
    textAlign: 'justify',
  },
});

export default CardForm;
