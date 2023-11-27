import { project } from './api';

export const getDashboard = async (page, orderBy) => {
  try {
    const { data } = await project.getDashboard(page, orderBy);
    if (!data) throw Error('No data');
    const { projectResult, totalPage } = data;
    return { projectResult, totalPage };
  } catch (e) {
    console.error(e);
    return false;
  }
};

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

export const getProjectsByPage = async (page, orderBy) => {
  try {
    const { data } = await project.getProjectsByPage(page, orderBy);
    if (!data) throw Error('No data');
    const { projectResult, totalPage } = data;
    return { projectResult, totalPage };
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

export const postProject = async (newProject) => {
  try {
    const { data } = await project.postProject(newProject);
    if (!data) throw Error('No data');
    return data.projectId;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const updateProjectById = async (id, newProject) => {
  try {
    const { data } = await project.updateProjectById(id, newProject);
    if (!data) throw Error('No data');
    return data.projectId;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const deleteProjectById = async (id) => {
  try {
    const { status } = await project.deleteProjectById(id);
    if (!status) throw Error('No data');
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const favorite = async (id) => {
  try {
    const { status } = await project.favorite(id);
    if (!status) throw Error('No data');
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
