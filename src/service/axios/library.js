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

export const getLib = async (libId) => {
  try {
    const { data } = await library.getLib(libId);
    if (!data) throw Error('No data');
    return data;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const editLib = async (libId, lib) => {
  try {
    const { data } = await library.editLib(libId, lib);
    if (!data) throw Error('No data');
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const deleteLib = async (libId) => {
  try {
    const { status } = await library.deleteLib(libId);
    if (!status) throw Error('No data');
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
