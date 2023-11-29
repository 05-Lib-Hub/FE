import React, { useState } from 'react';
import SearchIcon from './icons/SearchIcon';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const [word, setWord] = useState('');
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate(`/project/search/${word}`);
    setWord('');
  };

  const handleWord = (e) => {
    setWord(e.target.value);
  };

  return (
    <form className="relative" onSubmit={search}>
      <input
        className="border px-2 py-1 w-80 text-sm focus:outline-none focus:border-sky-500 bg-sky-50"
        type="text"
        placeholder="검색어를 입력해서 프로젝트를 검색하세요!"
        value={word}
        onChange={handleWord}
      />
      <button type="submit">
        <SearchIcon className="absolute top-0.5 right-1 text-gray-700" />
      </button>
    </form>
  );
}
