import React from 'react';
import Modal from '../ui/Modal';
import ProfileImg from '../ui/user/ProfileImg';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userInfoAtom } from '../../recoil/user';
import { Link } from 'react-router-dom';
import useClickOutside from '../../hooks/useClickOutside';

const LIST_CLASSNAME = 'py-3';

export default function Sidebar({ closeModal }) {
  const { nickname, profileImg } = useRecoilValue(userInfoAtom);
  const resetUser = useResetRecoilState(userInfoAtom);
  const ref = useClickOutside(closeModal);

  const logout = () => {
    resetUser();
    window.location.href = '/';
  };

  return (
    <Modal>
      <nav
        className="absolute right-0 w-72 h-full bg-white flex flex-col justify-start shadow-2xl animate-menuSlide"
        ref={ref}
      >
        <section className="flex items-center gap-6 bg-sky-200 p-4">
          <ProfileImg src={profileImg} />
          <span className="text-xl">{nickname}</span>
        </section>
        <ul className="px-6 divide-y">
          <li className={LIST_CLASSNAME}>
            <Link to="/project/list" onClick={closeModal}>
              All Projects
            </Link>
          </li>
          <li className={LIST_CLASSNAME}>
            <Link to="/me/profile" onClick={closeModal}>
              My Profile
            </Link>
          </li>
          <li className={LIST_CLASSNAME}>
            <Link to="/me/projects" onClick={closeModal}>
              My Project
            </Link>
          </li>
          <li className={LIST_CLASSNAME}>
            <Link to="/me/projects/favorite" onClick={closeModal}>
              Favorites
            </Link>
          </li>
          <li className={LIST_CLASSNAME}>
            <Link to="/" onClick={closeModal}>
              Follower
            </Link>
          </li>
        </ul>
        <button className="text-red-600 self-end mt-12 mr-6" onClick={logout}>
          Logout
        </button>
      </nav>
    </Modal>
  );
}
