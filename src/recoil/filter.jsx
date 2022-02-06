import { atom } from "recoil";

const jobCategory = {
  0: "close-date",
  1: "closeDate",
};

export const jobFilter = atom({
  key: "jobFilter",
  default: {
    category: jobCategory[0],
    title: "",
    techStack: [],
    job: "",
  },
});

export const studyFilter = atom({
  key: "studyFilter",
  default: {
    category: "",
    title: "",
    type: "",
  },
});

export const communityFilter = atom({
  key: "communityFilter",
  default: [],
});
