import React from 'react';
import GoogleSigninBtn from '../assets/images/GoogleSignIn.svg';
import { getUserInfo } from '../service/axios/auth';
import { auth } from '../service/axios/api';

const GOOGLE_AUTH_URL =
  process.env.REACT_APP_BASE_API_URL + 'outh2/authorization/google';

export default function AuthPage() {
  const getInfo = async () => {
    const userInfo = await getUserInfo();
    console.log(userInfo);
  };

  return (
    <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <a href={GOOGLE_AUTH_URL}>
        <img
          src={GoogleSigninBtn}
          alt="구글 로그인"
          onClick={auth.getUserInfo}
        />
      </a>
      <button onClick={getInfo}>정보 가져오기</button>
    </section>
  );
}
