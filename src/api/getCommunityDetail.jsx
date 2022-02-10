import { useQuery } from "react-query";
import { axiosInstance, daysFromToday, numToMillion, parseHtml } from "@/utils";

export const GetCommunityDetail = (id) =>
  useQuery(["getCommunityDetail", id], () => fetchData(id));

const fetchData = async (id) => {
  const res = await axiosInstance({
    url: `/boards/${id} `,
  });
  return res.data;
};

export const CommunityDetailSelector = (data) => {
  const { parsedhtml } = parseHtml(data.content);
  const contentData = {
    username: data.writerInfo.nickname,
    avatar: null,
    campus: data.writerInfo.ordinal,
    ordinal: data.writerInfo.campus,
    created: daysFromToday(data.createdDate),
    title: data.title,
    content: parsedhtml,
    likecount: numToMillion(data.totalLike),
    commentcount: numToMillion(0),
    viewcount: numToMillion(data.views),
    likeStatus: data.likeStatus,
  };
  return { contentData };
};
