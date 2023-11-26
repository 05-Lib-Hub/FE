import React, { useState } from 'react';
import Acordian from '../../ui/Acordian';

export default function LibraryList({ libraries }) {
  const [expandedList, setExpandedList] = useState([]);

  const handleChange = (index) => (_, isExpanded) => {
    setExpandedList(
      isExpanded
        ? [...expandedList, index]
        : expandedList.filter((item) => item !== index),
    );
  };

  return (
    <ul>
      {libraries.map((lib, index) => (
        <li className="my-4" key={lib.libraryId}>
          <Acordian
            lib={lib}
            index={index}
            expandedList={expandedList}
            handleChange={handleChange}
          />
        </li>
      ))}
    </ul>
  );
}
