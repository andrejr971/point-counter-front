import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-point.andrejr.dev/api/v1',
});

export default api;
