import React from 'react';
import DropdownList from './DropdownList';

export default function Dropdown({ addLibrary, edit, remove, className }) {
  return (
    <ul
      className={
        className +
        ' absolute top-8 right-0 bg-white border rounded-lg w-40 divide-y shadow-md'
      }
    >
      {addLibrary && (
        <DropdownList onClick={addLibrary}>라이브러리 추가</DropdownList>
      )}
      <DropdownList onClick={edit}>수정</DropdownList>
      <DropdownList onClick={remove}>삭제</DropdownList>
    </ul>
  );
}
