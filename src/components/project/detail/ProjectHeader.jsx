import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileImg from '../../ui/user/ProfileImg';
import OutlinedStarIcon from '../../ui/icons/OutlinedStarIcon';
import FilledStarIcon from '../../ui/icons/FilledStarIcon';
import MenuIcon from '../../ui/icons/MenuIcon';
import useClickOutside from '../../../hooks/useClickOutside';
import Dropdown from '../../ui/dropdown/Dropdown';
import KeywordList from './KeywordList';
import { favorite } from '../../../service/axios/project';

export default function ProjectHeader({
  data: {
    projectId,
    projectname,
    projectHashtags,
    userResponseDto,
    favoriteResponseDto,
  },
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const ref = useClickOutside(() => setMenuOpen(false));
  const navigate = useNavigate();

  useEffect(() => {
    setIsFavorite(favoriteResponseDto?.liked);
    setFavoriteCount(favoriteResponseDto?.favoriteCount);
  }, [favoriteResponseDto]);

  const toggleFavorite = async () => {
    const res = await favorite(projectId);
    if (res) {
      setIsFavorite(!isFavorite);
      setFavoriteCount(favoriteCount + (isFavorite ? -1 : 1));
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const addLibrary = () => {
    navigate(`library/new`);
  };

  const editProject = () => {
    navigate(`edit`);
  };

  const deleteProject = () => {
    if (window.confirm('삭제하시겠습니까?')) window.alert('삭제되었습니다.');
  };

  return (
    <section className="flex flex-col gap-3 px-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">{projectname}</h1>
        <div className="flex items-center gap-2.5">
          <ProfileImg src={userResponseDto?.profileImageUrl} />
          {userResponseDto?.username}
        </div>
      </div>
      <div className="flex justify-between">
        {projectHashtags && <KeywordList keywordList={projectHashtags} />}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1">
            <button onClick={toggleFavorite}>
              {isFavorite ? (
                <FilledStarIcon className="w-6 h-6" />
              ) : (
                <OutlinedStarIcon className="w-6 h-6" />
              )}
            </button>
            <span className="pt-0.5 text-xl">{favoriteCount}</span>
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
