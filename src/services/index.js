import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.jsonbin.io/b/',
});

export default api;
