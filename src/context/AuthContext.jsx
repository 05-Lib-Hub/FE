import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from '../recoil/user';
import { getMyInfo } from '../service/axios/myInfo';

export default function AuthContext({ children }) {
  const setUserInfo = useSetRecoilState(userInfoAtom);

  useEffect(() => {
    const getUserInfo = async () => {
      const {
        id,
        username: nickname,
        profileImageUrl: profileImg,
        userLinks: links,
      } = await getMyInfo();
      setUserInfo({ id, nickname, profileImg, links });
    };

    getUserInfo();
  }, []);

  return children;
}
