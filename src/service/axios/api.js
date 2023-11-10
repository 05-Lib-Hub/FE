import axios from 'axios';

export const api = axios.create({
  //   baseURL: process.env.REACT_APP_API_URL,
  baseURL: process.env.REACT_APP_LOCAL_API_URL,
});

export const auth = {
  login: () => api.get(''),
};
