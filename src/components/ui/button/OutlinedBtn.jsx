import React from 'react';

export default function OutlinedBtn({ className = '', onClick, children }) {
  return (
    <button
      className={`${className} px-4 py-0.5 border-2 border-sky-300 rounded-lg font-semibold text-sky-400 hover:bg-gray-100 ease-in-out transition-all`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
