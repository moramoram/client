import { axiosInstance } from "@/utils";
import { useMutation } from "react-query";

export const PostScrap = () => useMutation("postScrap", postScrap);

export const postScrap = async (type, status, studyId) => {
  const res = await axiosInstance({
    url: `/study-scraps/studies/${studyId}`,
    method: "post",
  });
  return res.data;
};
