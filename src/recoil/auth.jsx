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

export const isLoginState = selector({
  key: "isLoginState",
  get: ({ get }) => {
    return !get(token).accessToken;
  },
});

export const accessToken = selector({
  key: "accessToken",
  get: ({ get }) => {
    return get(token).accessToken;
  },
});

export const refreshToken = selector({
  key: "refreshToken",
  get: ({ get }) => {
    return get(token).refreshToken;
  },
});
