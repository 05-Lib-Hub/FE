import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedBtn from '../../ui/button/OutlinedBtn';
import FilledBtn from '../../ui/button/FilledBtn';
import LinkList from '../LinkList';
import { postProject } from '../../../service/axios/project';

const LABEL_CLASS = 'text-lg font-semibold text-gray-700';

export default function ProjectForm({ isEditting }) {
  const titleRef = useRef('');
  const descriptionRef = useRef('');
  const [tags, setTags] = useState([]);
  const [links, setLinks] = useState([]);
  const [isPublic, setIsPublic] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('isEditting: ', isEditting);
    // TODO: get data from server, set data
  }, [isEditting]);

  const addTag = (e) => {
    e.preventDefault();
    const tag = e.target.elements[0].value;
    e.target.elements[0].value = '';
    if (tag === '') return;
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

  const handlePublic = (e) => {
    setIsPublic(e.target.value);
  };

  const cancel = () => {
    if (window.confirm('새 프로젝트 작성을 정말 취소하시겠습니까?'))
      navigate(-1);
  };

  const submit = async () => {
    if (titleRef.current?.value === '')
      return alert('프로젝트명을 작성해주세요.');
    if (descriptionRef.current?.value === '')
      return alert('프로젝트 설명을 작성해주세요.');

    const project = {
      projectname: titleRef.current?.value,
      description: descriptionRef.current?.value,
      projectHashtags: tags,
      projectLinks: links,
      isPublic: isPublic,
    };

    const id = await postProject(project);

    if (!id) return alert('프로젝트 등록에 실패했습니다.');
    alert('새 프로젝트가 등록되었습니다.');
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
        <form className="flex items-center relative w-fit" onSubmit={addTag}>
          <label className={LABEL_CLASS}>태그</label>
          <input
            className="w-80 border ml-4 px-3 py-0.5 outline-none focus:border-sky-500"
            type="text"
            placeholder="등록할 태그를 입력해주세요."
          />
          <button className="absolute right-0 px-2" type="submit">
            <FiPlus />
          </button>
        </form>
        <ul className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <li
              key={index}
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
        <form
          className="flex items-center relative w-fit mb-3"
          onSubmit={addLink}
        >
          <label className={LABEL_CLASS}>링크</label>
          <input
            className="w-[30rem] border ml-4 px-3 py-0.5 outline-none focus:border-sky-500"
            type="text"
            placeholder="관련된 링크를 등록해주세요."
          />
          <button className="absolute right-0 px-2" type="submit">
            <FiPlus />
          </button>
        </form>
        <LinkList links={links} removeLink={removeLink} />
      </div>
      <section>
        <label className={LABEL_CLASS}>공개 여부</label>
        <RadioGroup row>
          <FormControlLabel
            value={true}
            control={<Radio />}
            label="전체 공개"
            onChange={handlePublic}
          />
          <FormControlLabel
            value={false}
            control={<Radio />}
            label="비공개"
            onChange={handlePublic}
          />
        </RadioGroup>
      </section>
      <section className="self-end flex gap-2">
        <OutlinedBtn onClick={cancel}>취소</OutlinedBtn>
        <FilledBtn onClick={submit}>완료</FilledBtn>
      </section>
    </section>
  );
}
