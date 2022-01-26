import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const loginModalState = atom({
  key: "loginModalState",
  default: false,
});
