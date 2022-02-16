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
  const url =
    data.type === "board"
      ? `/${commentType[data.type]}/${data.boardType}/${data.id}`
      : `/${commentType[data.type]}/${data.id}`;

  const res = await axiosInstance({
    url: url,
  });

  return res.data;
};

export const CommentSelector = (data) => {
  const commentData = data.map((comment) => {
    return {
      username: comment.writerInfo.nickname,
      src: comment.writerInfo.profileImg,
      created: daysFromToday(comment.createdDate),
      content: comment.content,
      commentId: comment.commentId,
    };
  });

  return { commentData };
};
