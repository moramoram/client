import { axiosInstance } from "@/utils";
import { useMutation } from "react-query";

export const PostBoards = () => useMutation("postComment", postBoards);

export const postBoards = async (data) => {
  const res = await axiosInstance({
    url: `/boards`,
    method: "post",
    data,
  });
  console.log(res);
  return res.data;
};
