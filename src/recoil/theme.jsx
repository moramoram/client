import { atom } from "recoil";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
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
