import React from 'react';
import DefaultImg from '../../../assets/images/defaultProfileImg.png';

export default function ProfileImg({ className = '', src }) {
  return (
    <div
      className={`${className} rounded-full overflow-hidden w-10 h-10 ${
        src ? '' : 'p-1 bg-gray-300'
      }`}
    >
      <img src={src ? src : DefaultImg} alt="profileImg" />
    </div>
  );
}
