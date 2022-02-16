import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const smallModalState = atom({
  key: "smallModalState",
  default: false,
});

export const submitModalState = atom({
  key: "submitModalState",
  default: false,
});

export const loginModalState = atom({
  key: "loginModalState",
  default: null,
});

export const createModalState = atom({
  key: "createModalState",
  default: false,
});

export const updateModalState = atom({
  key: "updateModalState",
  default: null,
});
