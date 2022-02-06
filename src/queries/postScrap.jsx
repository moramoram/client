import { axiosInstance } from "@/utils";
import { useMutation } from "react-query";

export const PostScrap = () => useMutation("postScrap", postScrap);

export const postScrap = async (type, status, studyId) => {
  const res = await axiosInstance({
    url: `/${type}-scraps/${studyId}`,
    method: status ? "delete" : "post",
  });
  return res.data;
};
