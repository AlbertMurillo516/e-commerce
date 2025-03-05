import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // Proxy to backend
  timeout: 5000,
});

export default instance;