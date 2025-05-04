import { ImageSource } from 'expo-image';

interface SplashContentType {
  key: number;
  image: ImageSource;
  text: string;
}

const SplashContent: SplashContentType[] = [
  {
    key: 1,
    image: require('@/assets/images/splash-screen/IMG SP1.png'),
    text: `Pelajari Al-Quran dengan \n Mudah di Tahsin App`,
  },
  {
    key: 2,
    image: require('@/assets/images/splash-screen/IMG SP2.png'),
    text: `Belajar Tahsin Bersama \n Pengajar Berpengalaman`,
  },
  {
    key: 3,
    image: require('@/assets/images/splash-screen/IMG SP3.png'),
    text: `Tingkatkan Kekhusyukan \n Ibadah dengan Tahsin App`,
  },
];

export default SplashContent;
