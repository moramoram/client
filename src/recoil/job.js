import { atom } from "recoil";

export const jobSearch = atom({
  key: "jobSearch",
  default: {
    title: "",
    techStack: [],
    job: "",
    criteria: "",
  },
});
