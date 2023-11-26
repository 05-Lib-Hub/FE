import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className={`max-w-screen-xl mx-auto flex-grow py-14 ${
          location.pathname === '/' ? 'w-full' : 'w-[50rem]'
        }`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
