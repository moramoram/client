import { axiosInstance } from "@/utils";
import { useMutation } from "react-query";

export const PutCommunity = () => useMutation("putCommunity", putCommunity);

export const putCommunity = async (boardId, data) => {
  const res = await axiosInstance({
    url: `/boards/${boardId}`,
    method: "put",
    data,
  });
  console.log(res);
  return res.data;
};
