import { atom } from "recoil";

export const communitySearch = atom({
  key: "communitySearch",
  default: {
    boardType: 1,
    title: "",
    criteria: {
      label: "",
      value: "",
    },
  },
});
