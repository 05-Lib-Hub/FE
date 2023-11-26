import React from 'react';
import ProjectLink from './ProjectLink';

export default function LinkList({ className = '', links, removeLink }) {
  return (
    <ul className={`${className} flex flex-col gap-2`}>
      {links.map((link, index) => (
        <ProjectLink
          key={index}
          link={link}
          index={index}
          removeLink={removeLink}
        />
      ))}
    </ul>
  );
}
