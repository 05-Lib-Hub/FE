import React, { useEffect, useState } from 'react';
import Title from '../components/ui/Title';
import Preview from '../components/project/Preview';
import { getProjectsByPage } from '../service/axios/project';
import Pagination from '@mui/material/Pagination';

export default function ProjectListPage() {
  const [projects, setProjects] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getProjects = async () => {
      const { content, totalPages } = await getProjectsByPage(page - 1);
      if (content) {
        setProjects(content);
        setTotalPages(totalPages);
      }
    };

    window.scrollTo(0, 0);
    getProjects();
  }, [page]);

  return (
    <section className="flex flex-col">
      <Title>모든 프로젝트</Title>
      <ul className="flex flex-col gap-8">
        {projects.map((project) => (
          <li key={project.projectId}>
            <Preview project={project} />
          </li>
        ))}
      </ul>
      <Pagination
        className="self-center mt-12"
        count={totalPages}
        color="primary"
        page={page}
        onChange={(_, page) => setPage(page)}
      />
    </section>
  );
}
