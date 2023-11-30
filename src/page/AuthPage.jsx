import React from 'react';
import GoogleSigninBtn from '../assets/images/GoogleSignIn.svg';
import { signIn } from '../service/axios/auth';

export default function AuthPage() {
  const signin = async () => {
    const res = await signIn();
    if (res) alert('로그인 성공');
    else alert('로그인 실패');
  };

  return (
    <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <button onClick={signin}>
        <img src={GoogleSigninBtn} alt="구글 로그인" />
      </button>
    </section>
  );
}
