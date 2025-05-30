import React from 'react';
import {
  Linking,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

interface TextLinkProps {
  text: string;
  url?: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}

function TextLink({ text, url, style, onPress }: Readonly<TextLinkProps>) {
  const handlePress = () => {
    Linking.openURL(url!).catch((err) =>
      console.warn('Failed to open URL:', err),
    );
  };

  return (
    <TouchableOpacity onPress={onPress ?? handlePress}>
      <Text style={[styles.link, style]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: '#006970',
    textDecorationLine: 'none',
    fontFamily: 'Poppins-Medium',
  },
});

export default TextLink;
