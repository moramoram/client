import { axiosInstance } from "@/utils";
import { useMutation } from "react-query";

export const PostCommunity = () => useMutation("postCommunity", postCommunity);

export const postCommunity = async (data) => {
  const res = await axiosInstance({
    url: `/boards`,
    method: "post",
    data,
  });
  console.log(res);
  return res.data;
};
