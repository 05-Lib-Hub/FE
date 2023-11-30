import React, { useEffect, useState } from 'react';
import LibraryList from '../project/detail/LibraryList';
import { getUserLibraries } from '../../service/axios/user';

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
    <section>
      <h1 className="text-2xl font-semibold">자주 사용하는 라이브러리</h1>
      <LibraryList libraries={libraries} />
    </section>
  );
}
