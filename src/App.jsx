import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import AuthPage from './page/AuthPage';
import Home from './page/Home';
import Layout from './components/layout/Layout';
import NotFound from './page/NotFound';
import ProjectFormPage from './page/ProjectFormPage';
import ProjectPage from './page/ProjectPage';
import LibraryFormPage from './page/LibraryFormPage';
import ProjectEditPage from './page/ProjectEditPage';
import ProfilePage from './page/ProfilePage';
import ProjectListPage from './page/ProjectListPage';

export default function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/project/new" element={<ProjectFormPage />} />
            <Route path="/project">
              <Route path="list" element={<ProjectListPage />} />
              <Route path=":articleId">
                <Route path="" element={<ProjectPage />} />
                <Route path="edit" element={<ProjectEditPage />} />
                <Route path="library/new" element={<LibraryFormPage />} />
              </Route>
            </Route>
            <Route path="/me" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
