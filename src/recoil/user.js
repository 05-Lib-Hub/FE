import { atom, selector } from 'recoil';

export const userInfoAtom = atom({
  key: 'userInfoAtom',
  default: {
    id: 1,
    nickname: 'junhakjh',
    profileImg: null,
  },
});

export const authState = selector({
  key: 'authState',
  get: ({ get }) => {
    const userInfo = get(userInfoAtom);
    return !!userInfo.nickname;
  },
});
