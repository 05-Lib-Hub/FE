import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from '../ui/Search';
import Logo from '../../assets/images/Logo.png';
import ProfileImg from '../ui/user/ProfileImg';
import { useRecoilValue } from 'recoil';
import { authState } from '../../recoil/user';
import Sidebar from './Sidebar';

export default function Header() {
  const [modal, setModal] = useState(false);
  const isSignedIn = useRecoilValue(authState);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 flex justify-between items-center h-16 px-10 bg-sky-200 shadow-lg z-50">
      <Link to="/">
        <img src={Logo} alt="로고" className="w-32" />
      </Link>
      <section className="flex items-center gap-6">
        <Search />
        <button className="px-3 py-0.5 border border-black rounded-lg">
          New
        </button>
        {isSignedIn ? (
          <ProfileImg onClick={() => setModal(true)} />
        ) : (
          <button onClick={() => navigate('/auth')}>로그인/회원가입</button>
        )}
      </section>
      {modal && <Sidebar closeModal={() => setModal(false)} />}
    </header>
  );
}
