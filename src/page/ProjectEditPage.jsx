import React from 'react';
import Title from '../components/ui/Title';
import ProjectForm from '../components/project/new/ProjectForm';

export default function ProjectEditPage() {
  return (
    <section className="mx-auto">
      <Title>프로젝트 수정</Title>
      <ProjectForm isEditting />
    </section>
  );
}
