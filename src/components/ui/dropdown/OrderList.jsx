import React from 'react';

export default function OrderList({ list, handleOrderBy }) {
  return (
    <ul className="absolute w-full border divide-y top-7 bg-white shadow-lg">
      {list.map((item, index) => (
        <li
          className="text-center hover:bg-sky-50"
          key={index}
          onClick={() => handleOrderBy(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
