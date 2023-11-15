import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-3">
      <h1 className="text-3xl">존재하지 않는 페이지입니다.</h1>
      <Link to="/" className="bg-sky-300 px-6 py-1 rounded-md text-white/95">
        메인으로 돌아가기
      </Link>
    </section>
  );
}
