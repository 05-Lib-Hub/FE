import React from 'react';

export default function Modal({ children }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-50">
      {children}
    </div>
  );
}
