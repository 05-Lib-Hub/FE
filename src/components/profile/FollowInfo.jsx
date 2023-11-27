import React from 'react';
import PeopleIcon from '../ui/icons/PeopleIcon';

export default function FollowInfo({ follower, following }) {
  return (
    <section className="flex items-center gap-2">
      <PeopleIcon />
      <b>{follower}</b> followers · <b>{following}</b> following
    </section>
  );
}
