import { atom, selector } from "recoil";
import { localStorageEffect } from "@/utils";

export const auth = atom({
  key: "auth",
  default: {
    email: undefined,
    nickname: undefined,
    authCheck: undefined,
    accessToken: undefined,
    refreshToken: undefined,
  },
});

export const isLoginState = selector({
  key: "isLoginState",
  get: ({ get }) => {
    return !!get(auth).accessToken;
  },
});

export const accessToken = selector({
  key: "accessToken",
  get: ({ get }) => {
    return get(auth).accessToken;
  },
  effects_UNSTABLE: [localStorageEffect("token")],
});

export const refreshToken = selector({
  key: "refreshToken",
  get: ({ get }) => {
    return get(auth).refreshToken;
  },
});
