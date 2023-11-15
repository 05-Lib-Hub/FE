import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="max-w-screen-xl mx-auto w-full flex-grow py-14">
        <Outlet />
      </main>
    </div>
  );
}
