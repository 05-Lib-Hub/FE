import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FollowList from './FollowList';

export default function FollowListContainer({ followers, followings }) {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="disabled tabs example"
      >
        <Tab label="Followers" />
        <Tab label="Following" />
      </Tabs>
      <section className="p-4">
        <FollowList list={value === 0 ? followers : followings} />
      </section>
    </section>
  );
}
