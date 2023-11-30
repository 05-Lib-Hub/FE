import React, { useEffect, useState } from 'react';
import Profile from '../components/profile/Profile';
import MyFavoriteLibs from '../components/profile/MyFavoriteLibs';
import FilledBtn from '../components/ui/button/FilledBtn';
import ProfileEdit from '../components/profile/ProfileEdit';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../recoil/user';
import { useParams } from 'react-router-dom';
import { getUserInfo } from '../service/axios/user';

const data = {
  links: [
    'https://junhakjh-portfolio.vercel.app/',
    'https://github.com/junhakjh',
  ],
};

export default function ProfilePage() {
  const [isEditting, setIsEditting] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: '',
    nickname: '',
    profileImg: '',
    links: [],
  });
  const [isFollowed, setIsFollowed] = useState(false);
  const { id, nickname, profileImg, links } = useRecoilValue(userInfoAtom);
  const { userId } = useParams();
  data.nickname = nickname;
  data.profileImg = profileImg;

  useEffect(() => {
    const getUserInfoById = async () => {
      const { userResponseDto, followed } = await getUserInfo(userId);
      const {
        id,
        username: nickname,
        profileImageUrl: profileImg,
        userLinks: links,
      } = userResponseDto;
      setUserInfo({ id, nickname, profileImg, links });
      setIsFollowed(followed);
    };

    if (parseInt(userId) === id || !userId) {
      setUserInfo({ id, nickname, profileImg, links });
    } else if (userId) {
      getUserInfoById();
    }
    setIsEditting(false);
  }, [id]);

  const edit = () => {
    setIsEditting(true);
  };

  const addLib = () => {};

  return (
    <section className="flex flex-col gap-12">
      <Profile userInfo={userInfo} followed={userInfo ? isFollowed : null} />
      {id === userInfo.id && (
        <FilledBtn className="self-end" onClick={edit}>
          프로필 수정
        </FilledBtn>
      )}
      {isEditting && (
        <ProfileEdit user={data} close={() => setIsEditting(false)} />
      )}
      <MyFavoriteLibs />
      {id === userInfo.id && (
        <FilledBtn className="self-end" onClick={addLib}>
          라이브러리 추가
        </FilledBtn>
      )}
    </section>
  );
}
