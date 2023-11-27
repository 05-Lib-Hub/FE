import React, { useState } from 'react';
import Profile from '../components/profile/Profile';
import MyFavoriteLibs from '../components/profile/MyFavoriteLibs';
import FilledBtn from '../components/ui/button/FilledBtn';
import ProfileEdit from '../components/profile/ProfileEdit';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../recoil/user';

const data = {
  links: [
    'https://junhakjh-portfolio.vercel.app/',
    'https://github.com/junhakjh',
  ],
};

export default function ProfilePage() {
  const [isEditting, setIsEditting] = useState(false);
  const { nickname, profileImg } = useRecoilValue(userInfoAtom);
  data.nickname = nickname;
  data.profileImg = profileImg;

  const edit = () => {
    setIsEditting(true);
  };

  const addLib = () => {};

  return (
    <section className="flex flex-col gap-12">
      <Profile data={data} />
      <FilledBtn className="self-end" onClick={edit}>
        프로필 수정
      </FilledBtn>
      {isEditting && (
        <ProfileEdit user={data} close={() => setIsEditting(false)} />
      )}
      <MyFavoriteLibs />
      <FilledBtn className="self-end" onClick={addLib}>
        라이브러리 추가
      </FilledBtn>
    </section>
  );
}
