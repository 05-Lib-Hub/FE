import React from 'react';
import Preview from '../project/Preview';

export default function DashBoard() {
  const data = [
    {
      id: 1,
      title: '소공 Lib-Hub 프로젝트',
      description:
        '2023-2학기 소프트웨어 공학 프로젝트. 라이브러리 관리 웹 서비스.',
      keywords: ['게시판', 'front-end', '프로젝트 관리'],
      profileImg: null,
    },
    {
      id: 2,
      title: '소공 Lib-Hub 프로젝트',
      description:
        '2023-2학기 소프트웨어 공학 프로젝트. 라이브러리 관리 웹 서비스.',
      keywords: ['게시판', 'front-end', '프로젝트 관리'],
      profileImg: null,
    },
    {
      id: 3,
      title: '소공 Lib-Hub 프로젝트',
      description:
        '2023-2학기 소프트웨어 공학 프로젝트. 라이브러리 관리 웹 서비스.',
      keywords: ['게시판', 'front-end', '프로젝트 관리'],
      profileImg: null,
    },
    {
      id: 4,
      title: '소공 Lib-Hub 프로젝트',
      description:
        '2023-2학기 소프트웨어 공학 프로젝트. 라이브러리 관리 웹 서비스.',
      keywords: ['게시판', 'front-end', '프로젝트 관리'],
      profileImg: null,
    },
  ];

  return (
    <section>
      <h1 className="text-3xl font-semibold mb-8 ml-4">대시보드</h1>
      <ul className="flex flex-col gap-8">
        {data.map((project) => (
          <li key={project.id}>
            <Preview project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
