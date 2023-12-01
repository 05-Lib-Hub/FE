import { atom, selector } from 'recoil';

export const userInfoAtom = atom({
  key: 'userInfoAtom',
  default: {
    id: null,
    nickname: '',
    profileImg: null,
    links: [],
  },
});

export const authState = selector({
  key: 'authState',
  get: ({ get }) => get(userInfoAtom).id !== null,
});
