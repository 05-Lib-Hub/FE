import React from 'react';
import DefaultImg from '../../../assets/images/defaultProfileImg.png';

export default function ProfileImg({ className = '', src }) {
  return (
    <div
      className={`${className} rounded-full overflow-hidden bg-gray-300 w-10 h-10 p-1`}
    >
      <img src={src ? src : DefaultImg} alt="profileImg" />
    </div>
  );
}
