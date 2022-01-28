import { atom, selector } from "recoil";

export const token = atom({
  key: "token",
  default: {
    accessToken: undefined,
    refreshToken: undefined,
    oauthRefreshToken: undefined,
    type: undefined,
  },
});

export const auth = atom({
  key: "auth",
  default: {
    name: undefined,
    nickname: undefined,
    googleEmail: undefined,
    githubEmail: undefined,
  },
});

export const isLogined = selector({
  key: "isLogined",
  get: ({ get }) => {
    return !!get(token).accessToken;
  },
});
