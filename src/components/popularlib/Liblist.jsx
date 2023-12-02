import React, { useEffect, useState } from 'react';
import { getPopularLib } from '../../service/axios/library';
import { Link } from 'react-router-dom';

export default function Liblist() {
  const [libraries, setLibraries] = useState([]);
  const date = new Date();

  const getWeekOfMonth = (date) => {
    const currentDate = date.getDate();
    const startOfMonth = new Date(date.setDate(1));
    const weekDay = startOfMonth.getDay();
    return parseInt((weekDay - 1 + currentDate) / 7) + 1;
  };

  const month = date.getMonth() + 1;
  const week = getWeekOfMonth(date);

  useEffect(() => {
    const getLiblist = async () => {
      const data = await getPopularLib();
      if (!data) return;
      setLibraries(data);
    };

    getLiblist();
  }, []);

  return (
    <section className="flex flex-col gap-4 mt-6">
      <h1 className="text-xl font-semibold">인기 라이브러리</h1>
      <ol className="list-decimal bg-sky-100 pt-2">
        {libraries.map((item, index) => (
          <li
            key={item.id}
            className="flex justify-between items-center px-4 py-2"
          >
            <Link to={`/project/search/lib/${item.libraryname}`}>
              <p className="flex-grow cursor-pointer">
                {index + 1}. {item.libraryname}
              </p>
            </Link>
            <span>{item.count}</span>
          </li>
        ))}
        <p className="text-sm text-gray-500 text-right px-4 py-2">
          {month}월 {week}주차
        </p>
      </ol>
    </section>
  );
}
