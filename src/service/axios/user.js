import { user } from './api';

export const getUserInfo = async (userId) => {
  try {
    const { data } = await user.getUserInfo(userId);
    if (!data) throw Error('No data');
    return data;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getUserLibraries = async (userId) => {
  try {
    const { data } = await user.getUserLibraries(userId);
    if (!data) throw Error('No data');
    return data;
  } catch (e) {
    console.error(e);
    return false;
  }
};
