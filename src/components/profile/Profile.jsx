import React from 'react';
import ProfileImg from '../ui/user/ProfileImg';

export default function Profile() {
  const data = {
    nickname: 'junhakjh',
    profileImg: null,
    links: [
      'https://junhakjh-portfolio.vercel.app/',
      'https://github.com/junhakjh',
    ],
  };

  return (
    <section
      className={`flex ${
        data.links.length === 0 ? 'items-center' : 'items-start'
      } gap-8`}
    >
      <ProfileImg className="w-32 h-32" src={data.profileImg} />
      <div className="flex flex-col flex-grow gap-3 my-3">
        <p className="text-4xl font-bold">{data.nickname}</p>
        {data.links.length !== 0 && <hr />}
        <ul>
          {data.links.map((link, index) => (
            <li key={index}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
