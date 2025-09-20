// src/api/api.ts
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

API.interceptors.request.use((config) => {
  return new Promise(async (resolve) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token && config.headers) {
        config.headers['X-API-TOKEN'] = token;
      }
    } catch (e) {
      // error ambil token, tetap resolve config
    }
    resolve(config);
  });
});

export default API;
