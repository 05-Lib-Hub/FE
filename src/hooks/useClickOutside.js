import { useEffect, useRef } from 'react';

export default function useClickOutside(handleClick) {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClick();
      }
    };
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 300);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      clearTimeout(timeoutId);
    };
  }, []);

  return ref;
}
