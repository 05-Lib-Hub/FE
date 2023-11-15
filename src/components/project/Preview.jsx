import React from 'react';
import defaultImg from '../../assets/images/defaultProfileImg.png';
import ProfileImg from '../ui/user/ProfileImg';
import { Link } from 'react-router-dom';

export default function Preview({ project }) {
  return (
    <Link to={`/project/${project.id}`}>
      <article className="border-4 rounded-2xl w-full">
        <section className="p-6">
          <section className="flex justify-between items-start">
            <h1 className="text-lg font-semibold">{project.title}</h1>
            <ProfileImg src={defaultImg} />
          </section>
          <p>{project.description}</p>
        </section>
        <hr className="border-2" />
        <ul className="px-6 py-4 flex gap-3">
          {project.tags.map((tag, index) => (
            <li className="inline-block" key={index}>
              <i>
                <span className="text-red-500">#</span> {tag}
              </i>
            </li>
          ))}
        </ul>
      </article>
    </Link>
  );
}
