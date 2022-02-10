import { atom, selector } from "recoil";
import { localStorageEffect } from "@/utils";

export const auth = atom({
  key: "auth",
  default: {
    userId: null,
    email: null,
    nickname: null,
    authCheck: null,
    campus: null,
    ordinal: null,
    likeJob: null,
    profileImg: null,
  },
});

export const token = atom({
  key: "token",
  default: {
    accessToken: undefined,
    refreshToken: undefined,
  },
  effects_UNSTABLE: [localStorageEffect("ssafe_token")],
});

export const isLoginState = selector({
  key: "isLoginState",
  get: ({ get }) => {
    return !!get(token).accessToken;
  },
});

export const isAuthenticated = selector({
  key: "isAuthenticated",
  get: ({ get }) => {
    return !!(get(auth)?.authCheck === 3);
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
