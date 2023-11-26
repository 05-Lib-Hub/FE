import React from 'react';
import { FaRegStar } from 'react-icons/fa6';

export default function OutlinedStarIcon({ className = '' }) {
  return <FaRegStar className={className + ' text-yellow-300'} />;
}
