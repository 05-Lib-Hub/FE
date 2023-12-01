import React from 'react';
import GoogleSigninBtn from '../assets/images/GoogleSignIn.svg';

export default function AuthPage() {
  const signin = () => {
    location.href = `${process.env.REACT_APP_BASE_API_URL}/oauth2/authorization/google`;
  };

  return (
    <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <button onClick={signin}>
        <img src={GoogleSigninBtn} alt="구글 로그인" />
      </button>
    </section>
  );
}
