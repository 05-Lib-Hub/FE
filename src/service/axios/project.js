import { project } from './api';

export const getAllProjects = async () => {
  try {
    const { data } = await project.getAllProjects();
    if (!data) throw Error('No data');
    const { projectResult } = data;
    return projectResult;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getProjectsByPage = async (page) => {
  try {
    const { data } = await project.getProjectsByPage(page);
    if (!data) throw Error('No data');
    const { content, totalPages } = data;
    return { content, totalPages };
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getProjectById = async (id) => {
  try {
    const { data } = await project.getProjectById(id);
    if (!data) throw Error('No data');
    return data;
  } catch (e) {
    console.error(e);
    return false;
  }
};
