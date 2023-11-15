import React from 'react';
import Logo from '../../assets/images/Logo.png';

export default function Footer() {
  return (
    <footer className="w-full h-44 bg-gray-200 flex flex-col justify-center items-center gap-2">
      <img src={Logo} alt="로고" />
      <p>Copyright © 2023 LibHub</p>
      <p>junhakjh@ajou.ac.kr</p>
    </footer>
  );
}
