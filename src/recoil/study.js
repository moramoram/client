import { atom } from "recoil";

export const studySearch = atom({
  key: "studySearch",
  default: {
    category: 1,
    title: "",
    studyType: "",
    criteria: "",
  },
});
