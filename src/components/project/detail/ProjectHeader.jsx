import React, { useState } from 'react';
import KeywordList from './KeywordList';
import ProfileImg from '../../ui/user/ProfileImg';
import OutlinedStarIcon from '../../ui/icons/OutlinedStarIcon';
import FilledStarIcon from '../../ui/icons/FilledStarIcon';
import MenuIcon from '../../ui/icons/MenuIcon';
import useClickOutside from '../../../hooks/useClickOutside';
import Dropdown from '../../ui/dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';

export default function ProjectHeader({ data }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useClickOutside(() => setMenuOpen(false));
  const navigate = useNavigate();

  const nickname = '그건인정을해';

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const addLibrary = () => {
    navigate(`library/new`);
  };

  const editProject = () => {};

  const deleteProject = () => {
    confirm('삭제하시겠습니까?') && alert('삭제되었습니다.');
  };

  return (
    <section className="flex flex-col gap-3 px-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">{data.title}</h1>
        <div className="flex items-center gap-2.5">
          <ProfileImg src={null} />
          {nickname}
        </div>
      </div>
      <div className="flex justify-between">
        <KeywordList keywordList={data.tags} />
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1">
            <button onClick={toggleFavorite}>
              {isFavorite ? (
                <FilledStarIcon className="w-6 h-6" />
              ) : (
                <OutlinedStarIcon className="w-6 h-6" />
              )}
            </button>
            <span className="pt-0.5 text-xl">{data.favorite}</span>
          </div>
          <button className="relative" onClick={toggleMenu} ref={ref}>
            <MenuIcon className="w-6 h-6" />
            {menuOpen && (
              <Dropdown
                addLibrary={addLibrary}
                edit={editProject}
                remove={deleteProject}
              />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
