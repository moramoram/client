import { axiosInstance } from "@/utils";

export const putCommunity = async (contentId, data) => {
  const res = await axiosInstance({
    url: `/boards/${contentId}`,
    method: "put",
    data,
  });
  console.log(res);
  return res.data;
};
