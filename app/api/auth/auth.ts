import API from '@/app/api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Router } from 'expo-router';

export default class AuthApi {
  static async login(
    router: Router,
    username: string,
    password: string,
  ): Promise<void> {
    try {
      const res = await API.post('/admin/api/login', { username, password });
      const token: string = res.data.data.token;

      await AsyncStorage.setItem('token', token);
      alert('Login berhasil!');

      router.navigate('/(tabs)/home-login');
    } catch (error) {
      let message = 'Terjadi kesalahan';

      if (axios.isAxiosError(error)) {
        const data = error.response?.data;

        if (data?.errors?.details && Array.isArray(data.errors.details)) {
          message = data.errors.details
            .map((err: any) => err.message)
            .join(', ');
        } else if (data?.message) {
          message = data.message;
        } else if (error.message) {
          message = error.message;
        }
      } else if (error instanceof Error) {
        message = error.message;
      }

      alert(message);
      // @ts-ignore
      console.log(
        'Login error:',
        JSON.stringify(error.response?.data, null, 2),
      );
    }
  }

  static async register(
    router: Router,
    username: string,
    email: string,
    password: string,
  ): Promise<void> {
    try {
      console.log('Registering with:', { username, email, password });

      const res = await API.post('/admin/api/register', {
        username,
        password,
        email,
      });
      alert('Login berhasil!');

      router.navigate('/auth/signin');
    } catch (error) {
      let message = 'Terjadi kesalahan';

      console.log(error);

      if (axios.isAxiosError(error)) {
        const data = error.response?.data;

        if (data?.errors?.details && Array.isArray(data.errors.details)) {
          message = data.errors.details
            .map((err: any) => err.message)
            .join(', ');
        } else if (data?.message) {
          message = data.message;
        } else if (error.message) {
          message = error.message;
        }
      } else if (error instanceof Error) {
        message = error.message;
      }

      alert(message);
      // @ts-ignore
      console.log(
        'Register error:',
        JSON.stringify(error.response?.data, null, 2),
      );
    }
  }
}
