import React from 'react';
import { useEffect, useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { authState, userInfoAtom } from '../recoil/user';
import { getMyInfo } from '../service/axios/myInfo';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { api } from '../service/axios/api';

export default function AuthContext() {
  const [loading, setLoading] = useState(true);
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const isSignedIn = useRecoilValue(authState);
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const sessionAccessToken = sessionStorage.getItem('accessToken');

  useEffect(() => {
    const accessToken = query.get('accessToken');
    if (accessToken) {
      api.defaults.headers.common['Authorization'] = accessToken;
      setLoading(false);
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
      setLoading(false);
      setMyInfo();
    }
  }, [sessionAccessToken]);

  useEffect(() => {
    const accessToken = query.get('accessToken');

    if (!accessToken && !sessionAccessToken) {
      navigate('/auth');
    } else {
      setLoading(false);
    }
  }, [isSignedIn]);

  return !loading && <Outlet />;
}
