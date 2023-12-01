import React from 'react';

export default function OutlinedBtn({
  className = '',
  onClick,
  children,
  noBorder,
}) {
  return (
    <button
      className={`${className} px-4 py-0.5 rounded-lg font-semibold text-sky-400 bg-white hover:bg-gray-100 ease-in-out transition-all ${
        !noBorder && 'border-2 border-sky-300'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
