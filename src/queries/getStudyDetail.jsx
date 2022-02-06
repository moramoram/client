import axios from "axios";
import { useQuery } from "react-query";

import { daysFromToday } from "@/utils";

export const GetStudyDetail = () => useQuery(["getStudyDetail"], fetchData);

const fetchData = async () => {
  console.log("API");
  const res = await axios.get("http://swapi.dev/api/people/1/");
  return res.data;
};

export const convertToStudyDetail = (data) => {
  const titleData = {
    title: data.title,
    subtitle: `${data.writerInfo.nickname} (${data.writerInfo.ordinal}기/${data.writerInfo.campus})`,
    src: null,
    highlight: data.on_off === 1 ? "모집중" : "모집완료",
  };
  const contentData = data.content;
  const commentData = data.comments.map((commment) => {
    return {
      username: commment.writerInfo.nickname,
      src: null,
      created: daysFromToday(commment.createdDate),
      content: commment.content,
    };
  });
  const tocItem = [
    {
      name: "info",
      title: "공고",
      number: null,
    },

    {
      name: "comments",
      title: "댓글",
      number: data.comments.length,
    },
  ];
  const sidebarData = {
    type: data.study_type,
    target: data.company_name,
    people: `${data.recruitment}명`,
    location: data.location,
    badges: [data.tech_stack.split()],
    scrap: data.scrapStatus,
  };
  return { commentData, contentData, titleData, tocItem, sidebarData };
};
