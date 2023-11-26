import React from 'react';

export default function DropdownList({ onClick, children }) {
  return (
    <li className="py-1.5 hover:bg-gray-100 z-50" onClick={onClick}>
      {children}
    </li>
  );
}
