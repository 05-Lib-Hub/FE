import React from 'react';

export default function FilledBtn({ className = '', onClick, children }) {
  return (
    <button
      className={`${className} px-4 py-0.5 border-2 border-sky-300 bg-sky-300 rounded-lg font-semibold text-white hover:border-sky-400 hover:bg-sky-400 ease-in-out transition-all`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
