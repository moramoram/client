import axios from "axios";
import { useQuery } from "react-query";
import { daysFromToday, numToMillion, parseHtml } from "@/utils";

export const GetCommunityDetail = () =>
  useQuery(["getCommunityDetail"], fetchData);

const fetchData = async () => {
  const res = await axios.get("http://swapi.dev/api/people/1/");
  return res.data;
};

export const CommunityDetailSelector = (data) => {
  const contentData = {
    username: data.writerInfo.nickname,
    avatar: null,
    campus: data.writerInfo.ordinal,
    ordinal: data.writerInfo.campus,
    created: daysFromToday(data.createdDate),
    title: "커뮤니티 상세 페이지 제목",
    content: parseHtml(data.content),
    likecount: numToMillion(data.totalLike),
    commentcount: numToMillion(data.comments.length),
    viewcount: numToMillion(data.views),
    likeStatus: data.likeStatus,
  };
  return { contentData };
};
