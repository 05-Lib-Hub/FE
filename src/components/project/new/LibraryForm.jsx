import React, { useRef, useState, useEffect } from 'react';
import OutlinedBtn from '../../ui/button/OutlinedBtn';
import { useNavigate } from 'react-router-dom';
import FilledBtn from '../../ui/button/FilledBtn';
import { FiPlus } from 'react-icons/fi';
import { addLib, editLib, getLib } from '../../../service/axios/library';

const LABEL_CLASS = 'text-lg font-semibold text-gray-700';

export default function LibraryForm({ articleId, libraryId }) {
  const titleRef = useRef('');
  const versionRef = useRef('');
  const descriptionRef = useRef('');
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (libraryId) {
      const getLibrary = async () => {
        const lib = await getLib(libraryId);
        if (lib) {
          titleRef.current.value = lib.libraryname;
          versionRef.current.value = lib.version;
          descriptionRef.current.value = lib.description;
          setTags(lib.libraryHashtags);
        }
      };

      getLibrary();
    }
  }, [libraryId]);

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

  const cancel = () => {
    confirm('새 라이브러리 작성을 정말 취소하시겠습니까?') && navigate(-1);
  };

  const submit = async () => {
    if (titleRef.current?.value === '')
      return alert('라이브러리명을 작성해주세요.');
    if (versionRef.current?.value === '')
      return alert('라이브러리 버전을 작성해주세요.');
    if (descriptionRef.current?.value === '')
      return alert('라이브러리 사용 사례 및 설명을 작성해주세요.');

    const library = {
      libraryname: titleRef.current?.value,
      description: descriptionRef.current?.value,
      version: versionRef.current?.value,
      libraryHashtags: tags,
    };

    if (libraryId) {
      const res = await editLib(libraryId, library);
      if (!res) return alert('라이브러리 수정에 실패했습니다.');
      alert('라이브러리가 수정되었습니다.');
    } else if (articleId) {
      const res = await addLib(articleId, library);
      if (!res) return alert('라이브러리 등록에 실패했습니다.');
      alert('라이브러리가 등록되었습니다.');
    }
    navigate(`/project/${articleId}`);
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center">
        <label className={LABEL_CLASS}>
          <span className="text-red-500">* </span>라이브러리 이름
        </label>
        <input
          className="w-80 border ml-4 px-3 py-0.5 outline-none focus:border-sky-500"
          type="text"
          placeholder="라이브러리의 이름을 작성해주세요."
          ref={titleRef}
        />
      </div>
      <div className="flex items-center">
        <label className={LABEL_CLASS}>
          <span className="text-red-500">* </span>버전
        </label>
        <input
          className="border ml-4 px-3 py-0.5 outline-none focus:border-sky-500"
          type="text"
          placeholder="ex) 0.0.1"
          ref={versionRef}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className={LABEL_CLASS}>
          <span className="text-red-500">* </span>설명 및 사용 예시
        </label>
        <textarea
          className="border px-3 py-0.5 outline-none focus:border-sky-500 resize-none h-48"
          placeholder="라이브러리의 설명 및 사용 예시를 작성해주세요."
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
      <section className="self-end flex gap-2">
        <OutlinedBtn onClick={cancel}>취소</OutlinedBtn>
        <FilledBtn onClick={submit}>완료</FilledBtn>
      </section>
    </section>
  );
}
