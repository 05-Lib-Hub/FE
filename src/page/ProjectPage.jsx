import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LinkList from '../components/project/LinkList';
import Description from '../components/project/detail/Description';
import ProjectHeader from '../components/project/detail/ProjectHeader';
import LibraryList from '../components/project/detail/LibraryList';

const data = {
  title: '프로젝트 제목',
  description: '프로젝트 설명\n프로젝트 설명\n프로젝트 설명\n프로젝트 설명\n',
  content: '프로젝트 내용',
  tags: [
    { id: 1, tag: '태그1' },
    { id: 2, tag: '태그2' },
    { id: 3, tag: '태그3' },
  ],
  links: [
    'https://www.google.com',
    'https://www.naver.com',
    'https://www.daum.net',
  ],
  favorite: 4,
  projectLibraries: [
    {
      libraryId: 2,
      libraryname: 'lib1',
      version: '1.0.0',
      usecase: 'Sample Library for project 2',
      libraryHashtags: ['lib1', 'lib2', 'lib3'],
      createDate: '2023-11-23T12:25:57.272222',
      modifiedDate: '2023-11-23T12:25:57.272222',
    },
    {
      libraryId: 22,
      libraryname: 'lib21',
      version: '1.0.0',
      usecase: 'Sample Library for project 2',
      libraryHashtags: [],
      createDate: '2023-11-23T12:25:57.994197',
      modifiedDate: '2023-11-23T12:25:57.994197',
    },
  ],
};

export default function ProjectPage() {
  const { articleId } = useParams();

  useEffect(() => {
    // TODO: get data from server
  }, [articleId]);

  return (
    <section className="mx-auto w-[50rem] flex flex-col gap-4">
      <ProjectHeader data={data} />
      <hr />
      <section className="flex flex-col gap-3 px-6">
        <LinkList links={data.links} />
        <Description className="shadow-md">{data.description}</Description>
      </section>
      <hr />
      <LibraryList libraries={data.projectLibraries} />
    </section>
  );
}
