import React from 'react';
import Liblist from '../components/popularlib/Liblist';
// import DashBoard from '../components/dashboard/DashBoard';

export default function Home() {
  return (
    <div className="grid grid-cols-main gap-16">
      <Liblist />
      {/* <DashBoard /> */}
    </div>
  );
}
