import React, { useEffect, useState } from 'react';
import ProfileImg from '../ui/user/ProfileImg';
import FilledBtn from '../ui/button/FilledBtn';
import OutlinedBtn from '../ui/button/OutlinedBtn';
import { toggleFollow } from '../../service/axios/myInfo';

export default function Profile({
  userInfo: { id, nickname, profileImg, links },
  followed,
}) {
  const [isFollowed, setIsFollowed] = useState(false);

  useEffect(() => {
    setIsFollowed(followed);
  }, [followed]);

  const handleFollow = async () => {
    const res = await toggleFollow(id);
    if (!res)
      return alert(
        isFollowed ? '팔로우 취소를 실패했습니다.' : '팔로우를 실패했습니다.',
      );

    setIsFollowed(!isFollowed);
  };

  return (
    <section
      className={`flex ${
        links.length === 0 ? 'items-center' : 'items-start'
      } gap-8`}
    >
      <ProfileImg className="w-32 h-32" src={profileImg} />
      <div className="flex flex-col flex-grow gap-3 my-3">
        <div className="flex justify-between items-center">
          <p className="text-4xl font-bold">{nickname}</p>
          {isFollowed !== undefined &&
            (isFollowed ? (
              <FilledBtn className="w-28" onClick={handleFollow}>
                Unfollow
              </FilledBtn>
            ) : (
              <OutlinedBtn className="w-28" onClick={handleFollow}>
                Follow
              </OutlinedBtn>
            ))}
        </div>
        {links.length !== 0 && <hr />}
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
