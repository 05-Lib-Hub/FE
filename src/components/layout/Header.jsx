import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Search from '../ui/Search';
import Logo from '../../assets/images/Logo.png';
import ProfileImg from '../ui/user/ProfileImg';
import { useRecoilValue } from 'recoil';
import { authState } from '../../recoil/user';

export default function Header() {
  const isSignedIn = useRecoilValue(authState);
  const navigate = useNavigate();

  return (
    <>
      <header className='flex justify-between items-center h-16 px-10 bg-sky-200 shadow-lg'>
        <Link to='/'>
          <img src={Logo} alt='로고' className='w-32' />
        </Link>
        <section className='flex items-center gap-6'>
          <Search />
          <button className='px-3 py-0.5 border border-black rounded-lg'>New</button>
          {isSignedIn ? <ProfileImg /> : <button onClick={() => navigate('/auth')}>로그인/회원가입</button>}
        </section>
      </header>
      <Outlet />
    </>
  );
}
