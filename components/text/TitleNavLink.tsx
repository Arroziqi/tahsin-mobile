import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import NavLink from '@/components/text/NavLink';

interface TitleNavLinkProps {
  title: string;
  label: string;
  titleStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  trailingIcon?: React.ReactNode;
  onPress?: () => void;
}

function TitleNavLink({
  title,
  label,
  labelStyle,
  titleStyle,
  containerStyle,
  trailingIcon,
  onPress,
}: Readonly<TitleNavLinkProps>) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <NavLink
        text={label}
        style={labelStyle}
        onPress={onPress}
        trailingIcon={trailingIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
});

export default TitleNavLink;
