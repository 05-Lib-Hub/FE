import React from 'react';
import FollowItem from './FollowItem';

export default function FollowList({ list, setFollowings }) {
  return (
    <ul className="flex flex-col divide-y">
      {list.map(({ userResponseDto: user, followed }) => (
        <FollowItem
          key={user.id}
          user={user}
          followed={followed}
          setFollowings={setFollowings}
        />
      ))}
    </ul>
  );
}
