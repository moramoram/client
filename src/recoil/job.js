import { atom } from "recoil";

export const jobSearch = atom({
  key: "jobSearch",
  default: {
    category: 1,
    title: "",
    techStack: [],
    job: "",
    criteria: "",
  },
});
