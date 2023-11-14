import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './page/AuthPage';
import Home from './page/Home';
import Header from './components/layout/Header';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<AuthPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
