import React, { useEffect, useState } from 'react';
import ProfileImg from '../ui/user/ProfileImg';
import FilledBtn from '../ui/button/FilledBtn';
import OutlinedBtn from '../ui/button/OutlinedBtn';
import { toggleFollow } from '../../service/axios/myInfo';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export default function FollowItem({ user, followed, setFollowings }) {
  const [isFollowed, setIsFollowed] = useState(followed);

  useEffect(() => {
    setIsFollowed(followed);
  }, [followed]);

  const handleFollow = async () => {
    const res = await toggleFollow(user.id);
    if (!res)
      return alert(
        isFollowed ? '팔로우 취소를 실패했습니다.' : '팔로우를 실패했습니다.',
      );

    !isFollowed &&
      setFollowings((prev) => {
        const newArr = [...prev, { userResponseDto: user, followed: true }];
        return _.uniqBy(newArr, 'userResponseDto.id');
      });
    setIsFollowed(!isFollowed);
  };

  return (
    <li className="flex items-center gap-6 py-7">
      <Link
        className="flex items-center gap-6 flex-grow"
        to={`/profile/${user.id}`}
      >
        <ProfileImg className="w-16 h-16" src={user.profileImageUrl} />
        <p className="text-3xl font-medium flex-grow">{user.username}</p>
      </Link>
      {isFollowed ? (
        <FilledBtn className="w-28" onClick={handleFollow}>
          Unfollow
        </FilledBtn>
      ) : (
        <OutlinedBtn className="w-28" onClick={handleFollow}>
          Follow
        </OutlinedBtn>
      )}
    </li>
  );
}
