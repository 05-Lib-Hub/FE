import React from 'react';
import DefaultImg from '../../../assets/images/defaultProfileImg.png';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../../recoil/user';

export default function ProfileImg() {
  const { profileImg } = useRecoilValue(userInfoAtom);

  return (
    <button className='rounded-full overflow-hidden bg-gray-300 w-10 h-10 p-1'>
      <img src={profileImg ? profileImg : DefaultImg} alt='profileImg' />
    </button>
  );
}
