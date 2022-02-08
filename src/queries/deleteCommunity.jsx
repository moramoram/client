import { axiosInstance } from "@/utils";
import { useMutation } from "react-query";

export const DeleteCommunity = () =>
  useMutation("deleteCommunity", deleteCommunity);

export const deleteCommunity = async (boardId) => {
  const res = await axiosInstance({
    url: `/boards/${boardId}`,
    method: "delete",
  });
  console.log(res);
  return res.data;
};
