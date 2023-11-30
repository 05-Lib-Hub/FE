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

export const getFavoriteProjects = async (page, orderBy) => {
  try {
    const { data } = await user.getFavoriteProjects(page, orderBy);
    if (!data) throw Error('No data');
    return data;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getFollowers = async () => {
  try {
    const { data } = await user.getFollowers();
    if (!data) throw Error('No data');
    return data;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getFollowings = async () => {
  try {
    const { data } = await user.getFollowings();
    if (!data) throw Error('No data');
    return data;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const toggleFollow = async (userId) => {
  try {
    const { status } = await user.toggleFollow(userId);
    if (!status) throw Error('No data');
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getMyInfo = async () => {
  try {
    const { data } = await user.getMyInfo();
    if (!data) throw Error('No data');
    return data;
  } catch (e) {
    console.error(e);
    return false;
  }
};
