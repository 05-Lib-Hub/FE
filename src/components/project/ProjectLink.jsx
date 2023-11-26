import React from 'react';

export default function ProjectLink({ link, index, removeLink }) {
  return (
    <li>
      <a
        className="text-gray-600 mr-2.5 cursor-pointer underline"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {link}
      </a>
      {removeLink && (
        <button className="text-red-500" onClick={() => removeLink(index)}>
          X
        </button>
      )}
    </li>
  );
}
