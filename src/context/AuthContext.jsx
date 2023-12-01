import { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { authState, userInfoAtom } from '../recoil/user';
import { getMyInfo } from '../service/axios/myInfo';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../service/axios/api';

export default function AuthContext({ children }) {
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const isSignedIn = useRecoilValue(authState);
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const sessionAccessToken = sessionStorage.getItem('accessToken');

  useEffect(() => {
    const accessToken = query.get('accessToken');
    if (accessToken) {
      sessionStorage.setItem('accessToken', accessToken);
      navigate('/');
    }
  }, [query]);

  useEffect(() => {
    const setMyInfo = async () => {
      const data = await getMyInfo();
      if (!data) {
        alert('로그인이 필요합니다.');
        navigate('/auth');
        return;
      }
      setUserInfo({
        id: data.id,
        nickname: data.username,
        profileImg: data.profileImageUrl,
        links: data.userLinks,
      });
    };

    if (sessionAccessToken && !isSignedIn) {
      api.defaults.headers.common['Authorization'] = sessionAccessToken;
      setMyInfo();
    }
  }, [sessionAccessToken]);

  useEffect(() => {
    const accessToken = query.get('accessToken');

    if (!accessToken && !sessionAccessToken) {
      navigate('/auth');
    }
  });

  return children;
}
