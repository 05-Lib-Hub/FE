import React, { useEffect, useState } from 'react';
import Title from '../components/ui/Title';
import Preview from '../components/project/Preview';
import { getProjectsByPage } from '../service/axios/project';
import Pagination from '@mui/material/Pagination';
import Order from '../components/ui/dropdown/Order';
import { order, orderMapper } from '../lib/order';

export default function ProjectListPage() {
  const [projects, setProjects] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState(order[0]);

  useEffect(() => {
    const getProjects = async () => {
      const { projectResult, totalPage } = await getProjectsByPage(
        page,
        orderMapper[orderBy],
      );
      if (projectResult) {
        setProjects(projectResult);
        setTotalPages(totalPage);
      }
    };

    window.scrollTo(0, 0);
    getProjects();
  }, [page, orderBy]);

  const handleOrderBy = (orderBy) => {
    setOrderBy(orderBy);
  };

  return (
    <section className="flex flex-col">
      <div className="flex justify-between items-start">
        <Title>모든 프로젝트</Title>
        <Order
          list={order}
          curOrderBy={orderBy}
          handleOrderBy={handleOrderBy}
        />
      </div>
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
