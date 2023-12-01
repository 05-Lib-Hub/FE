import React, { useEffect, useState } from 'react';
import { getUserLibraries } from '../../service/axios/user';
import UsedLibraries from './UsedLibraries';

export default function MyFavoriteLibs({ userId }) {
  const [libraries, setLibraries] = useState([]);

  useEffect(() => {
    const getLibs = async () => {
      if (!userId) return;
      const data = await getUserLibraries(userId);
      setLibraries(data);
    };

    getLibs();
  }, [userId]);

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">사용한 라이브러리</h1>
      {libraries.length > 0 ? (
        <UsedLibraries libraries={libraries} />
      ) : (
        <p>사용한 라이브러리가 없습니다.</p>
      )}
    </section>
  );
}
