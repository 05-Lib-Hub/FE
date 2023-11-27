import React, { useEffect, useState } from 'react';
import { getPopularLib } from '../../service/axios/library';

export default function Liblist() {
  const [libraries, setLibraries] = useState([]);
  const date = new Date();
  const getWeekOfMonth = (date) => {
    let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let firstDayOfWeek = new Date(date.setDate(date.getDate() - date.getDay()));
    return Math.ceil(
      (firstDayOfWeek.getDate() - firstDayOfMonth.getDate() + 1) / 7,
    );
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
            <span>
              {index + 1}. {item.libraryname}
            </span>
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
