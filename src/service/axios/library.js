import { library } from './api';

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
