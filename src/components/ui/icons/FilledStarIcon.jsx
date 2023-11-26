import React from 'react';
import { FaStar } from 'react-icons/fa6';

export default function FilledStarIcon({ className = '' }) {
  return <FaStar className={className + ' text-yellow-300'} />;
}
