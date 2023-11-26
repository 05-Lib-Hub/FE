import React from 'react';
import Profile from '../components/profile/Profile';
import MyFavoriteLibs from '../components/profile/MyFavoriteLibs';

export default function ProfilePage() {
  return (
    <section className="flex flex-col gap-12">
      <Profile />
      <MyFavoriteLibs />
    </section>
  );
}
