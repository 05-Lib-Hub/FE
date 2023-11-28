import React, { useEffect, useState } from 'react';
import Profile from '../components/profile/Profile';
import MyFavoriteLibs from '../components/profile/MyFavoriteLibs';
import FilledBtn from '../components/ui/button/FilledBtn';
import ProfileEdit from '../components/profile/ProfileEdit';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../recoil/user';
import { useParams } from 'react-router-dom';

const data = {
  links: [
    'https://junhakjh-portfolio.vercel.app/',
    'https://github.com/junhakjh',
  ],
};

export default function ProfilePage() {
  const [isEditting, setIsEditting] = useState(false);
  const { id, nickname, profileImg } = useRecoilValue(userInfoAtom);
  const { userId } = useParams();
  data.nickname = nickname;
  data.profileImg = profileImg;

  useEffect(() => {
    // TODO: userId가 있으면 해당 유저의 정보를 가져오고, 없으면 내 정보를 가져오는거 구현
    setIsEditting(false);
  }, [id]);

  const edit = () => {
    setIsEditting(true);
  };

  const addLib = () => {};

  return (
    <section className="flex flex-col gap-12">
      <Profile data={data} />
      {id === userId && (
        <FilledBtn className="self-end" onClick={edit}>
          프로필 수정
        </FilledBtn>
      )}
      {isEditting && (
        <ProfileEdit user={data} close={() => setIsEditting(false)} />
      )}
      <MyFavoriteLibs />
      {id === userId && (
        <FilledBtn className="self-end" onClick={addLib}>
          라이브러리 추가
        </FilledBtn>
      )}
    </section>
  );
}
