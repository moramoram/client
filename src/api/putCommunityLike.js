import { axiosInstance } from "@/utils";

export const putCommunityLike = async (id) => {
  const res = await axiosInstance({
    url: `/boards/${id}/likes`,
    method: "put",
  });
  return res.data;
};
