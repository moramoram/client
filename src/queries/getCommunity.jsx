import { axiosInstance } from "@/utils";
import { useMutation } from "react-query";

export const GetCommunity = () => useMutation("getCommunity", getCommunity);

export const getCommunity = async (boardId) => {
  const res = await axiosInstance({
    url: `/boards/${boardId}`,
    method: "get",
  });
  // console.log(res);
  return res.data;
};
