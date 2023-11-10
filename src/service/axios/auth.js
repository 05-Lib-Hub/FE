import { auth } from './api';

export const login = () => {
  try {
    auth.login();
  } catch (error) {
    console.log(error);
  }
};
