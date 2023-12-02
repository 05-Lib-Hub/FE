import { s3 } from './api';

export const uploadImg = async (file) => {
  try {
    const { data } = await s3.uploadImg(file);
    if (!data) throw Error('No data');
    return data;
  } catch (e) {
    console.error(e);
    return false;
  }
};
