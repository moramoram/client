import { useQuery } from "react-query";
import { axiosInstance, daysFromToday } from "@/utils";

const commentType = {
  company: "company-comments",
  study: "study-comments",
  board: "board-comments",
};

export const GetComments = (data) =>
  useQuery(["getComments", data], () => fetchData(data));

const fetchData = async (data) => {
  const res = await axiosInstance({
    url: `/${commentType[data.type]}/${data.id} `,
  });
  console.log(res);
  return res.data;
};

export const CommentSelector = (data) => {
  const commentData = data.map((comment) => {
    return {
      username: comment.writerInfo?.nickname,
      src: comment.profileImg,
      created: daysFromToday(comment.createdDate),
      content: comment.content,
      commentId: comment.commentId,
    };
  });

  return { commentData };
};
