import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

export const auth = {
  getUserInfo: () => api.get('/api/user/info'),
  // eslint-disable-next-line no-undef
  // (window.location.href =
  //   'http://ec2-3-34-198-148.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google'),
};
