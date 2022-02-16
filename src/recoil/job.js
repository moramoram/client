import { atom } from "recoil";

export const jobSearch = atom({
  key: "jobSearch",
  default: {
    category: 1,
    title: "",
    techStack: [],
    job: "",
    criteria: {
      label: "",
      value: "",
    },
  },
});

export const jobFilter = atom({
  key: "jobFilter",
  default: false,
});
