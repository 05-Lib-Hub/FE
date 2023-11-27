import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LinkList from '../components/project/LinkList';
import Description from '../components/project/detail/Description';
import ProjectHeader from '../components/project/detail/ProjectHeader';
import LibraryList from '../components/project/detail/LibraryList';
import { getProjectById } from '../service/axios/project';

export default function ProjectPage() {
  const [project, setProject] = useState({});
  const { articleId } = useParams();

  useEffect(() => {
    const getProject = async () => {
      const data = await getProjectById(articleId);
      if (data) {
        setProject(data);
      }
    };

    getProject();
  }, [articleId]);

  return (
    <section className="mx-auto flex flex-col gap-4">
      <ProjectHeader data={project} />
      <hr />
      <section className="flex flex-col gap-3 px-6">
        {project.projectLinks && project.projectLinks.length !== 0 && (
          <LinkList links={project.projectLinks} />
        )}
        <Description className="shadow-md">{project.description}</Description>
      </section>
      {project.projectLibraries && project.projectLibraries.length !== 0 && (
        <>
          <hr />
          <LibraryList
            projectName={project.projectname}
            libraries={project.projectLibraries}
          />
        </>
      )}
    </section>
  );
}
