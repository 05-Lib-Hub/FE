import React, { useEffect, useState } from 'react';
import Profile from '../components/profile/Profile';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../recoil/user';
import FollowInfo from '../components/profile/FollowInfo';
import { getFollowers, getFollowings } from '../service/axios/myInfo';
import FollowListContainer from '../components/profile/FollowListContainer';

export default function FollowListPage() {
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const userInfo = useRecoilValue(userInfoAtom);

  useEffect(() => {
    const getFollowList = async () => {
      const followerList = await getFollowers();
      if (followerList) setFollowers(followerList);
      const followingList = await getFollowings();
      if (followingList) setFollowings(followingList);
    };

    getFollowList();
  }, []);

  return (
    <section className="flex flex-col gap-12">
      <Profile userInfo={userInfo} />
      <FollowInfo follower={followers.length} following={followings.length} />
      <FollowListContainer followers={followers} followings={followings} />
    </section>
  );
}
