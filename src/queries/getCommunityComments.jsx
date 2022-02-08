import { useQuery } from "react-query";
import { axiosInstance, daysFromToday, numToMillion, parseHtml } from "@/utils";

export const GetCommunityComments = (id) =>
  useQuery(["getCommunityComments", id], () => fetchData(id));

const fetchData = async (id) => {
  const res = await axiosInstance({
    url: `/board-comments/${id} `,
  });
  return res.data;
};

export const CommunityCommentSelector = (data) => {
  const commentData = data.map((comment) => {
    return {
      username: comment.userInfo.nickname,
      src: comment.profileImg,
      created: daysFromToday(comment.createdDate),
      content: comment.content,
      commentId: comment.commentId,
    };
  });

  return { commentData };
};
