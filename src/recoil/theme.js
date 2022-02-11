import { atom } from "recoil";
import { localStorageEffect } from "@/utils";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const TYPE = {
  DEFAULT: "default",
  TRANSPARENT: "transparent",
};

export const themeState = atom({
  key: "themeState",
  default: THEME.LIGHT,
  effects_UNSTABLE: [localStorageEffect("theme")],
});

export const navTypeState = atom({
  key: "navTypeState",
  default: TYPE.DEFAULT,
});
