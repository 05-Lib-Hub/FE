import React from 'react';

export default function Liblist() {
  const data = {
    library: [
      {
        id: 1,
        libName: 'Spring',
        num: 17,
      },
      {
        id: 2,
        libName: 'React',
        num: 16,
      },
      {
        id: 3,
        libName: 'Axios',
        num: 15,
      },
      {
        id: 4,
        libName: 'jwt_decod3',
        num: 14,
      },
      {
        id: 5,
        libName: 'node express',
        num: 12,
      },
      {
        id: 6,
        libName: 'Next.js',
        num: 10,
      },
      {
        id: 7,
        libName: 'Nest.js',
        num: 9,
      },
      {
        id: 8,
        libName: 'Recoil',
        num: 7,
      },
      {
        id: 9,
        libName: 'Redux toolkit',
        num: 4,
      },
      {
        id: 10,
        libName: 'jQuery',
        num: 2,
      },
    ],
    month: 10,
    week: 4,
  };

  return (
    <section className="flex flex-col gap-4 mt-6">
      <h1 className="text-xl font-semibold">인기 라이브러리</h1>
      <ol className="list-decimal bg-sky-100 pt-2">
        {data.library.map((item, index) => (
          <li
            key={item.id}
            className="flex justify-between items-center px-4 py-2"
          >
            <span>
              {index + 1}. {item.libName}
            </span>
            <span>{item.num}</span>
          </li>
        ))}
        <p className="text-sm text-gray-500 text-right px-4 py-2">
          {data.month}월 {data.week}주차
        </p>
      </ol>
    </section>
  );
}
