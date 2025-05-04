import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Image, ImageSource } from 'expo-image';

interface SplashScreenImageProps {
  imgUrl: ImageSource;
}

function SplashScreenImage({ imgUrl }: Readonly<SplashScreenImageProps>) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={imgUrl}
        placeholder={imgUrl.toString()}
        contentFit={'cover'}
        transition={1000}
      />
    </View>
  );
}

const screenWidth: number = Dimensions.get('window').width;
const ASPECT_RATIO: number = 356 / 415;
const MAX_WIDTH = 356;
const MAX_HEIGHT = 415;

const targetWidth: number = Math.min(screenWidth * 0.8, MAX_WIDTH);
const targetHeight: number = Math.min(targetWidth / ASPECT_RATIO, MAX_HEIGHT);

const styles = StyleSheet.create({
  container: {
    width: targetWidth,
    height: targetHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SplashScreenImage;
