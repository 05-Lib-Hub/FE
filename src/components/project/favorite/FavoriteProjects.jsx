import React, { useEffect, useState } from 'react';
import Title from '../../ui/Title';
import Preview from '../Preview';
import { getFavoriteProjects } from '../../../service/axios/myInfo';

export default function FavoriteProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await getFavoriteProjects();
      if (projects) setProjects(projects);
    };

    getProjects();
  }, []);

  return (
    <section className="flex flex-col">
      <Title>즐겨찾기</Title>
      <ul className="flex flex-col gap-8">
        {projects.map((project) => (
          <li key={project.projectId}>
            <Preview project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
