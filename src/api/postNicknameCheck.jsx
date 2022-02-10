import { axiosInstance } from "@/utils";

export const PostNicknameCheck = async (data) => {
  const res = await axiosInstance({
    url: "/users/nickname-check",
    method: "post",
    data,
  });
  return res.data;
};
