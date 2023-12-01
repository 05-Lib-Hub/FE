import React, { useEffect } from 'react';

export default function Modal({ children }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-50">
      {children}
    </div>
  );
}
