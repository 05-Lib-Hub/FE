import React from 'react';
import LibraryList from '../project/detail/LibraryList';

export default function MyFavoriteLibs() {
  const libraries = [
    {
      libraryId: 1,
      libraryname: 'react',
      version: '17.0.2',
      usecase: '리액트는 페이스북에서 만든 프론트엔드 라이브러리입니다.',
      url: 'https://ko.reactjs.org/',
    },
    {
      libraryId: 2,
      libraryname: 'vue',
      version: '3.0.11',
      usecase: '뷰는 에반 유가 만든 프론트엔드 라이브러리입니다.',
      url: 'https://kr.vuejs.org/',
    },
    {
      libraryId: 3,
      libraryname: 'angular',
      version: '12.0.3',
      usecase: '앵귤러는 구글에서 만든 프론트엔드 프레임워크입니다.',
      url: 'https://angular.io/',
    },
  ];

  return (
    <section>
      <h1 className="text-2xl font-semibold">자주 사용하는 라이브러리</h1>
      <LibraryList libraries={libraries} />
    </section>
  );
}
