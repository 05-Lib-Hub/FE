import React from 'react';
import { MdEdit } from 'react-icons/md';

export default function EditIcon({ className = '' }) {
  return <MdEdit className={`${className} w-6 h-6 text-gray-600`} />;
}
