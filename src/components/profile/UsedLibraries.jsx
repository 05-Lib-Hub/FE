import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { v4 as uuidv4 } from 'uuid';
import Preview from '../project/Preview';

export default function UsedLibraries({ libraries }) {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <Tabs
        className="w-fit max-w-full"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {libraries.map((lib) => (
          <Tab
            className="w-44"
            key={uuidv4()}
            sx={{ textTransform: 'none' }}
            label={
              <p className="flex items-center gap-1">
                {lib.libraryName}{' '}
                <span className="text-red-500 mb-0.5">[{lib.count}]</span>
              </p>
            }
          />
        ))}
      </Tabs>
      <ul className="flex flex-col gap-8 mt-4">
        {libraries &&
          libraries[value].usedProjects.map((project) => (
            <li key={uuidv4()}>
              <Preview project={project} />
            </li>
          ))}
      </ul>
    </section>
  );
}
