import { axiosInstance } from "@/utils";

export const postCommunity = async (data) => {
  const res = await axiosInstance({
    url: `/boards`,
    method: "post",
    data,
  });
  return res.data;
};
