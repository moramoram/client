import { axiosInstance } from "@/utils";

export const postCommunity = async (data) => {
  const res = await axiosInstance({
    url: `/boards`,
    method: "post",
    data,
  });
  console.log(res);
  return res.data;
};
