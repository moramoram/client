import { axiosInstance } from "@/utils";
import { useRecoilValue } from "recoil";
import axios from "axios";
import { useMutation } from "react-query";
import { accessToken } from "@/recoil/auth";

export const postScrap = async (type, status, studyId) => {
  const res = await axiosInstance({
    url: `/study-scraps/studies/${studyId}`,
    method: "post",
  });
  return res.data;
};

export const PostScrap = () => useMutation("postScrap", postScrap);
