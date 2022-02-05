import axios from "axios";
import { useQuery } from "react-query";
import { daysLeftFromToday } from "@/utils";

export const GetJobDetail = () => useQuery(["getStudyDetail"], fetchData);

const fetchData = async () => {
  console.log("API");
  const res = await axios.get("http://swapi.dev/api/people/1/");
  return res.data;
};

export const JobDetailSelector = (data) => {
  const titleData = {
    title: data.title,
    subtitle: data.companyName,
    src: data.logoImg,
    highlight: daysLeftFromToday(data.closeData) ? "모집중" : "모집완료",
  };
  const contentData = data.content;
  const tocItem = [
    {
      name: "info",
      title: "공고",
      number: null,
    },
    {
      name: "study",
      title: "스터디",
      number: null,
    },
    {
      name: "comments",
      title: "댓글",
      number: null,
    },
  ];
  return { contentData, titleData, tocItem };
};
