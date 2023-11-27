import { auth } from './api';

export const getUserInfo = async () => {
  try {
    const { data } = await auth.getUserInfo();
    if (!data) return;
    return data;
  } catch (error) {
    console.error(error);
  }
};
