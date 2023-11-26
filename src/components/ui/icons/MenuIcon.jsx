import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

export default function MenuIcon({ className = '' }) {
  return (
    <HiOutlineDotsHorizontal
      className={
        className +
        ' text-gray-400 hover:text-gray-500 transition-all ease-in-out'
      }
    />
  );
}
