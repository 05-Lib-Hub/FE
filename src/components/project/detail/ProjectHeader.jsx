import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileImg from '../../ui/user/ProfileImg';
import OutlinedStarIcon from '../../ui/icons/OutlinedStarIcon';
import FilledStarIcon from '../../ui/icons/FilledStarIcon';
import MenuIcon from '../../ui/icons/MenuIcon';
import useClickOutside from '../../../hooks/useClickOutside';
import Dropdown from '../../ui/dropdown/Dropdown';
import KeywordList from './KeywordList';
import { deleteProjectById, favorite } from '../../../service/axios/project';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../../recoil/user';

export default function ProjectHeader({
  data: {
    projectId,
    projectname,
    projectHashtags,
    userContentResponseDto,
    favoriteResponseDto,
  },
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const { id } = useRecoilValue(userInfoAtom);
  const ref = useClickOutside(() => setMenuOpen(false));
  const navigate = useNavigate();

  useEffect(() => {
    setIsFavorite(favoriteResponseDto?.liked);
    setFavoriteCount(favoriteResponseDto?.favoriteCount);
  }, [favoriteResponseDto]);

  const goProfile = () => {
    navigate(`/profile/${userContentResponseDto?.userResponseDto?.id}`);
  };

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
    navigate(`${projectname}/library/new`);
  };

  const editProject = () => {
    navigate(`edit`);
  };

  const deleteProject = async () => {
    if (window.confirm('삭제하시겠습니까?')) {
      const res = await deleteProjectById(projectId);
      if (res) {
        window.alert('삭제되었습니다.');
        navigate(`/`);
      }
    }
  };

  return (
    <section className="flex flex-col gap-3 px-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">{projectname}</h1>
        <button onClick={goProfile}>
          <div className="flex items-center gap-2.5">
            <ProfileImg
              src={userContentResponseDto?.userResponseDto.profileImageUrl}
            />
            {userContentResponseDto?.userResponseDto.username}
          </div>
        </button>
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
          {id === userContentResponseDto?.userResponseDto.id && (
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
          )}
        </div>
      </div>
    </section>
  );
}
