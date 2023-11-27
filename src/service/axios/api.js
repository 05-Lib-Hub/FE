import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}/api`,
});

export const auth = {
  getUserInfo: () => api.get('user/info'),
  // eslint-disable-next-line no-undef
  // (window.location.href =
  //   'http://ec2-3-34-198-148.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google'),
};

export const project = {
  getDashboard: (page, orderBy) =>
    api.get(`project/dashboard/${page}?pagingMode=${orderBy}`),
  getAllProjects: () => api.get('project'),
  getProjectsByPage: (page, orderBy) =>
    api.get(`project/page/${page}?pagingMode=${orderBy}`),
  getProjectById: (id) => api.get(`project/${id}`),
  postProject: (project) => api.post('project', project),
  updateProjectById: (id, project) => api.patch(`project/${id}`, project),
  deleteProjectById: (id) => api.delete(`project/${id}`),
  favorite: (id) => api.post(`project/${id}/favorite`),
};

export const library = {
  getPopularLib: () => api.get('libraryCount/top10'),
  addLib: (projectId, lib) => api.post(`projects/${projectId}/libraries`, lib),
  getLib: (libId) => api.get(`projects/libraries/${libId}`),
  editLib: (libId, lib) => api.patch(`projects/libraries/${libId}`, lib),
  deleteLib: (libId) => api.delete(`projects/libraries/${libId}`),
};

export const user = {
  getMyProjects: (page, orderBy) =>
    api.get(`project/mypage/${page}?pagingMode=${orderBy}`),
  getFavoriteProjects: () => api.get('user/favorites'),
  getFollowers: () => api.get('follow/followerList'),
  getFollowings: () => api.get('follow/followList'),
  toggleFollow: (userId) => api.post(`follow/${userId}`),
};
