import { atom, selector } from "recoil";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const TYPE = {
  DEFAULT: "default",
  TRANSPARENT: "transparent",
};

export const studyCategory = atom({
  key: "studyCategory",
  default: 0,
});

export const studyDetailData = selector({
  key: "studyDetailData",
  get: ({ get }) = {

  }
});
