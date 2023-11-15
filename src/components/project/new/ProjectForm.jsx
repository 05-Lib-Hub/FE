import React, { useRef, useState } from 'react';
import OutlinedBtn from '../../ui/button/OutlinedBtn';
import { useNavigate } from 'react-router-dom';
import FilledBtn from '../../ui/button/FilledBtn';

const LABEL_CLASS = 'text-lg font-semibold text-gray-700';

export default function ProjectForm() {
  const titleRef = useRef('');
  const descriptionRef = useRef('');
  const [tags, setTags] = useState([]);
  const [links, setLinks] = useState([]);
  const navigate = useNavigate();

  const addTag = (e) => {
    e.preventDefault();
    const tag = e.target.elements[0].value;
    e.target.elements[0].value = '';
    if (tag === '') return;
    if (tags.includes(tag)) setTags(tags.filter((item) => item !== tag));
    else setTags([...tags, tag]);
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const addLink = (e) => {
    e.preventDefault();
    const link = e.target.elements[0].value;
    e.target.elements[0].value = '';
    if (link === '') return;
    else setLinks([...links, link]);
  };

  const removeLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const cancel = () => {
    confirm('새 프로젝트 작성을 정말 취소하시겠습니까?') && navigate(-1);
  };

  const submit = () => {
    if (titleRef.current?.value === '')
      return alert('프로젝트명을 작성해주세요.');
    if (descriptionRef.current?.value === '')
      return alert('프로젝트 설명을 작성해주세요.');

    console.log(titleRef.current?.value);
    console.log(descriptionRef.current?.value);
    console.log(tags);
    console.log(links);
    alert('새 프로젝트가 등록되었습니다.');
    const id = Math.floor(Math.random() * 100);
    navigate(`/project/${id}`);
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center">
        <label className={LABEL_CLASS}>프로젝트명</label>
        <input
          className="flex-grow border ml-4 px-3 py-0.5 outline-none focus:border-sky-500"
          type="text"
          placeholder="프로젝트의 이름을 작성해주세요."
          ref={titleRef}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className={LABEL_CLASS}>프로젝트 설명</label>
        <textarea
          className="border px-3 py-0.5 outline-none focus:border-sky-500 resize-none h-48"
          placeholder="프로젝트의 설명을 작성해주세요."
          ref={descriptionRef}
        />
      </div>
      <div>
        <form className="flex items-center" onSubmit={addTag}>
          <label className={LABEL_CLASS}>태그</label>
          <input
            className="w-80 border ml-4 px-3 py-0.5 outline-none focus:border-sky-500"
            type="text"
            placeholder="등록할 태그를 입력해주세요."
          />
        </form>
        <ul className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <li
              key={tag}
              className="text-sm mr-2.5 cursor-pointer inline-block"
              onClick={() => removeTag(index)}
            >
              <i>
                <span className="text-red-500">#</span> {tag}
              </i>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <form className="flex items-center" onSubmit={addLink}>
          <label className={LABEL_CLASS}>링크</label>
          <input
            className="w-[30rem] border ml-4 px-3 py-0.5 outline-none focus:border-sky-500"
            type="text"
            placeholder="관련된 링크를 등록해주세요."
          />
        </form>
        <ul className="flex flex-col gap-2 mt-3">
          {links.map((link, index) => (
            <li key={index}>
              <a
                className="text-gray-600 mr-2.5 cursor-pointer underline"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                {link}
              </a>
              <button
                className="text-red-500"
                onClick={() => removeLink(index)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
      <section className="self-end flex gap-2">
        <OutlinedBtn onClick={cancel}>취소</OutlinedBtn>
        <FilledBtn onClick={submit}>완료</FilledBtn>
      </section>
    </section>
  );
}
