import React from 'react';

export default function Description({ className = '', children }) {
  return (
    <article
      className={
        className + ' px-6 py-3 bg-gray-100 border whitespace-pre-wrap'
      }
    >
      {children}
    </article>
  );
}
