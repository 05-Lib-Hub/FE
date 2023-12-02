import React from 'react';
import ProfileImg from '../ui/user/ProfileImg';
import { Link } from 'react-router-dom';

export default function Preview({
  project: {
    projectId,
    projectname,
    description,
    projectHashtags,
    userContentResponseDto,
  },
}) {
  return (
    <Link to={`/project/${projectId}`}>
      <article className="border-4 rounded-2xl w-full">
        <section className="p-6">
          <section className="flex justify-between items-center mb-3">
            <h1 className="text-lg font-semibold">{projectname}</h1>
            <ProfileImg
              src={userContentResponseDto.userResponseDto.profileImageUrl}
            />
          </section>
          <p>{description}</p>
        </section>
        {projectHashtags && projectHashtags.length !== 0 && (
          <>
            <hr className="border-2" />
            <ul className="px-6 py-4 flex gap-3">
              {projectHashtags.map((tag, index) => (
                <li className="inline-block" key={index}>
                  <i>
                    <span className="text-red-500">#</span> {tag}
                  </i>
                </li>
              ))}
            </ul>
          </>
        )}
      </article>
    </Link>
  );
}
