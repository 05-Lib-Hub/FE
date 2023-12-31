import React from 'react';

export default function KeywordList({ keywordList }) {
  return (
    <ul className="flex gap-4">
      {keywordList.map((tag, index) => (
        <li className="text-gray-500" key={tag.id ?? index}>
          <span className="text-red-500 mr-1">#</span>
          {tag.tag ?? tag}
        </li>
      ))}
    </ul>
  );
}
