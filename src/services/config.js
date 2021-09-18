import axios from 'axios';

export const DEV = 'http://localhost:5000';
export const LIVE = '';

export const BASE_URL = process.env.NODE_ENV === 'development' ? DEV : LIVE;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

export default instance;
