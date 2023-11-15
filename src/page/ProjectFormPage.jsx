import React from 'react';
import Title from '../components/ui/Title';
import ProjectForm from '../components/project/new/ProjectForm';

export default function ProjectFormPage() {
  return (
    <section className="px-72">
      <Title>새 프로젝트</Title>
      <ProjectForm />
    </section>
  );
}
