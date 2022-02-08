import { atom, selector } from "recoil";
import { localStorageEffect } from "@/utils";

export const auth = atom({
  key: "auth",
  default: {
    email: undefined,
    nickname: undefined,
    authCheck: undefined,
  },
});

export const token = atom({
  key: "token",
  default: {
    accessToken: undefined,
    refreshToken: undefined,
  },
  effects_UNSTABLE: [localStorageEffect("token")],
});

export const isLoginState = selector({
  key: "isLoginState",
  get: ({ get }) => {
    return !!get(token).accessToken;
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
