import React from 'react';
import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import TextLink from '@/components/text/TextLink';
import colors from '@/constants/colors';

interface NavLinkProps {
  text: string;
  color?: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

function NavLink({
  text,
  color = colors.C02,
  style,
  onPress,
  leadingIcon,
  trailingIcon,
}: Readonly<NavLinkProps>) {
  return (
    <View style={styles.container}>
      {leadingIcon}
      <TextLink
        text={text}
        style={[styles.text, { color }, style]}
        onPress={onPress}
      />
      {trailingIcon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});

export default NavLink;
