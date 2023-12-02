import React, { useEffect, useState } from 'react';
import Modal from '../ui/Modal';
import ProfileImg from '../ui/user/ProfileImg';
import EditIcon from '../ui/icons/EditIcon';
import OutlinedBtn from '../ui/button/OutlinedBtn';
import FilledBtn from '../ui/button/FilledBtn';
import { FiPlus } from 'react-icons/fi';
import LinkList from '../project/LinkList';
import { useRecoilState } from 'recoil';
import { userInfoAtom } from '../../recoil/user';
import { updateMyInfo } from '../../service/axios/myInfo';
import { uploadImg } from '../../service/axios/s3';
import { resizeImage } from '../../service/image/resize';

export default function ProfileEdit({ close }) {
  const [imgFile, setImgFile] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [profileImg, setProfileImg] = useState('');
  const [nickname, setNickname] = useState('');
  const [links, setLinks] = useState([]);
  const [user] = useRecoilState(userInfoAtom);

  useEffect(() => {
    setImgPreview(user.profileImg);
    setProfileImg(user.profileImg);
    setNickname(user.nickname);
    setLinks(user.links);
  }, [user]);

  const fileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImgFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgPreview(reader.result);
    };
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
    if (confirm('정말 취소하시겠습니까?')) {
      close();
    }
  };

  const save = async () => {
    if (nickname === '') return alert('이름을 입력해주세요.');
    if (nickname.length > 10) return alert('이름은 10자 이내로 입력해주세요.');

    let newProfileImg = profileImg;

    if (imgFile) {
      const resizedImage = await resizeImage(imgFile, 800, 800);
      const formData = new FormData();
      formData.append('files', new File([resizedImage], imgFile.name));
      formData.append('uploadFilePath', 'user');
      const data = await uploadImg(formData);
      if (!data) return alert('이미지 등록에 실패했습니다.');
      newProfileImg = data[0].uploadFileUrl;
    }

    const updatedUser = {
      username: nickname,
      profileImageUrl: newProfileImg,
      userLinks: links,
    };
    const res = await updateMyInfo(updatedUser);
    if (!res) return alert('프로필 수정에 실패했습니다.');
    alert('프로필이 수정되었습니다.');
    window.location.reload();
    close();
  };

  return (
    <Modal>
      <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[35rem] h-[45rem] shadow-2xl rounded-lg flex flex-col px-10 py-12 gap-6 overflow-y-auto">
        <h1 className="text-3xl font-semibold">프로필 수정</h1>
        <section className="flex-grow w-full flex flex-col gap-6">
          <label
            className="self-center mt-4 relative cursor-pointer"
            htmlFor="editImg"
          >
            <input
              className="hidden"
              type="file"
              id="editImg"
              accept="image/*"
              onChange={fileChange}
            />
            <ProfileImg className="w-32 h-32" src={imgPreview} />
            <div className="absolute bottom-0 right-0 border rounded-full bg-white p-1">
              <EditIcon />
            </div>
          </label>
          <input
            className="border-b focus:outline-none focus:border-sky-500 px-2 py-1"
            type="text"
            placeholder="이름"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <div>
            <form
              className="flex items-center relative mb-3"
              onSubmit={addLink}
            >
              <input
                className="w-full border-b focus:outline-none focus:border-sky-500 pl-2 pr-8 py-1"
                type="text"
                placeholder="자신을 소개할 수 있는 링크를 등록해주세요."
              />
              <button className="absolute right-0 px-2" type="submit">
                <FiPlus />
              </button>
            </form>
            <LinkList className="px-2" links={links} removeLink={removeLink} />
          </div>
        </section>
        <div className="self-end">
          <OutlinedBtn onClick={cancel}>취소</OutlinedBtn>
          <FilledBtn className="ml-2" onClick={save}>
            저장
          </FilledBtn>
        </div>
      </section>
    </Modal>
  );
}
