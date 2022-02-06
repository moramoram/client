import { axiosInstance } from "@/utils";
import { useMutation } from "react-query";

const commentType = {
  company: "company-comments",
  study: "study-comments",
  board: "board-comments",
};

export const PostComment = () => useMutation("postComment", postComment);

export const postComment = async (type, params) => {
  console.log("post comment");
  const res = await axiosInstance({
    url: `/${commentType[type]}`,
    method: "post",
    params: {
      ...params,
    },
  });
  return res.data;
};
