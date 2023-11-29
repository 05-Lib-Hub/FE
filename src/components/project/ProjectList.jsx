import React, { useEffect, useState } from 'react';
import Title from '../ui/Title';
import Preview from './Preview';
import {
  getDashboard,
  getProjectsByPage,
  search,
  searchByLib,
} from '../../service/axios/project';
import Pagination from '@mui/material/Pagination';
import Order from '../ui/dropdown/Order';
import { order, orderMapper } from '../../lib/order';
import { getMyProjects } from '../../service/axios/myInfo';
import { useParams } from 'react-router-dom';

const typeMapper = {
  all: '모든 프로젝트',
  home: '대시보드',
  me: '내 프로젝트',
};

export default function ProjectList({ type }) {
  const [projects, setProjects] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState(order[0]);
  const { word, library } = useParams();

  useEffect(() => {
    const getProjects = async () => {
      const { projectResult, totalPage } =
        type === 'all'
          ? await getProjectsByPage(page, orderMapper[orderBy])
          : type === 'home'
            ? await getDashboard(page, orderMapper[orderBy])
            : await getMyProjects(page, orderMapper[orderBy]);
      if (projectResult) {
        setProjects(projectResult);
        setTotalPages(totalPage);
      }
    };

    const getProjectsByWord = async () => {
      const { projectResult, totalPage } = word
        ? await search(page, orderMapper[orderBy], word)
        : await searchByLib(page, orderMapper[orderBy], library);
      if (projectResult) {
        setProjects(projectResult);
        setTotalPages(totalPage);
      }
    };

    window.scrollTo(0, 0);
    if (word || library) getProjectsByWord();
    else getProjects();
  }, [page, orderBy, word]);

  const handleOrderBy = (orderBy) => {
    setOrderBy(orderBy);
  };

  return (
    <section className="flex flex-col">
      <div className="flex justify-between items-start">
        <Title>
          {type ? typeMapper[type] : `"${word ?? library}" 에 대한 검색결과`}
        </Title>
        <Order
          list={order}
          curOrderBy={orderBy}
          handleOrderBy={handleOrderBy}
        />
      </div>
      {projects.length === 0 && (
        <div className="flex justify-center items-center h-96">
          <p className="text-gray-500 text-2xl">프로젝트가 없습니다.</p>
        </div>
      )}
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
