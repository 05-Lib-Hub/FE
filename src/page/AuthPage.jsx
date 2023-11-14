import React from 'react';
import { login } from '../service/axios/auth';
import GoogleSigninBtn from '../assets/images/GoogleSignIn.svg';

export default function AuthPage() {
  return (
    <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <button onClick={login}>
        <img src={GoogleSigninBtn} alt='구글 로그인' />
      </button>
    </section>
  );
}
