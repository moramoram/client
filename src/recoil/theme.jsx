import { atom } from "recoil";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const TYPE = {
  DEFAULT: "default",
  TRANSPARENT: "transparent",
};

export const getTheme = () => {
  const theme = localStorage.getItem("theme");

  if (theme === THEME.DARK) {
    return THEME.DARK;
  }
  return THEME.LIGHT;
};

export const themeState = atom({
  key: "themeState",
  default: getTheme(),
});

export const navTypeState = atom({
  key: "navTypeState",
  default: TYPE.DEFAULT,
});
