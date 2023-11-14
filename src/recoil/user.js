import { atom, selector } from 'recoil';

export const userInfoAtom = atom({
  key: 'userInfoAtom',
  default: {
    nickname: null,
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
