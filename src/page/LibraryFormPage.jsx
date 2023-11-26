import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LibraryForm from '../components/project/new/LibraryForm';

export default function LibraryFormPage() {
  const { articleId } = useParams();
  const title = '소공 프로젝트';

  useEffect(() => {
    console.log(articleId);
  }, [articleId]);

  return (
    <section className="mx-auto flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">라이브러리 추가</h1>
      <h2 className="text-lg text-gray-600">{title}</h2>
      <hr />
      <LibraryForm articleId={articleId} />
    </section>
  );
}
