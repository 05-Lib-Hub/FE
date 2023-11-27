import { user } from './api';

export const getMyProjects = async (page, orderBy) => {
  try {
    const { data } = await user.getMyProjects(page, orderBy);
    if (!data) throw Error('No data');
    return data;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getFavoriteProjects = async () => {
  try {
    const { data } = await user.getFavoriteProjects();
    if (!data) throw Error('No data');
    return data;
  } catch (e) {
    console.error(e);
    return false;
  }
};