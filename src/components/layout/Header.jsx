import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from '../ui/Search';
import Logo from '../../assets/images/Logo.png';
import ProfileImg from '../ui/user/ProfileImg';
import { useRecoilValue } from 'recoil';
import { authState, userInfoAtom } from '../../recoil/user';
import Sidebar from './Sidebar';
import OutlinedBtn from '../ui/button/OutlinedBtn';

export default function Header() {
  const [modal, setModal] = useState(false);
  const isSignedIn = useRecoilValue(authState);
  const { profileImg } = useRecoilValue(userInfoAtom);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 flex justify-between items-center h-16 px-10 bg-sky-200 shadow-lg z-50">
      <Link to="/">
        <img src={Logo} alt="로고" className="w-32" />
      </Link>
      <section className="flex items-center gap-6">
        <Search />
        <Link to="/project/new">
          <OutlinedBtn noBorder>New</OutlinedBtn>
        </Link>
        {isSignedIn ? (
          <button onClick={() => setModal(true)}>
            <ProfileImg src={profileImg} />
          </button>
        ) : (
          <button onClick={() => navigate('/auth')}>로그인/회원가입</button>
        )}
      </section>
      {modal && <Sidebar closeModal={() => setModal(false)} />}
    </header>
  );
}
