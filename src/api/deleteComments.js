import { useMutation } from "react-query";
import { axiosInstance } from "@/utils";

const commentType = {
  company: "company-comments",
  study: "study-comments",
  board: "board-comments",
};

export const DeleteComments = (data) =>
  useMutation(["deleteComments", data], deleteComments(data));

export const deleteComments = async (data) => {
  const url = `/${commentType[data.type]}/${data.id}`;
  const res = await axiosInstance({
    url: url,
    method: "delete",
  });
  return res.data;
};
