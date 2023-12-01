import React, { useEffect, useState } from 'react';
import Profile from '../components/profile/Profile';
import MyFavoriteLibs from '../components/profile/MyFavoriteLibs';
import FilledBtn from '../components/ui/button/FilledBtn';
import ProfileEdit from '../components/profile/ProfileEdit';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../recoil/user';
import { useParams } from 'react-router-dom';
import { getUserInfo, withdraw } from '../service/axios/user';
import OutlinedBtn from '../components/ui/button/OutlinedBtn';

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
  }, [id, userId, nickname, profileImg, links]);

  const edit = () => {
    setIsEditting(true);
  };

  const withdrawUser = async () => {
    if (window.confirm('정말로 Lib Hub를 탈퇴하시겠습니까?')) {
      const res = await withdraw();
      if (res) alert('Lib Hub 탈퇴가 완료되었습니다.');
      else alert('Lib Hub 탈퇴에 실패하였습니다. 다시 시도해주세요.');
    }
  };

  return (
    <section className="flex flex-col gap-12">
      <Profile userInfo={userInfo} followed={userId ? isFollowed : undefined} />
      {id === userInfo.id && (
        <FilledBtn className="self-end" onClick={edit}>
          프로필 수정
        </FilledBtn>
      )}
      {isEditting && <ProfileEdit close={() => setIsEditting(false)} />}
      <MyFavoriteLibs userId={userInfo.id} />
      {id === userInfo.id && (
        <OutlinedBtn
          className="self-end border-red-400 text-red-400"
          onClick={withdrawUser}
        >
          회원 탈퇴
        </OutlinedBtn>
      )}
    </section>
  );
}
