import { library } from './api';

export const getPopularLib = async () => {
  try {
    const { data } = await library.getPopularLib();
    if (!data) throw Error('No data');
    return data;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const addLib = async (projectId, lib) => {
  try {
    const { data } = await library.addLib(projectId, lib);
    if (!data) throw Error('No data');
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
