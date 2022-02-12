import { axiosInstance } from "@/utils";

export const putJobScrap = async (id) => {
  const res = await axiosInstance({
    url: `/recruits/${id}/scraps`,
    method: "put",
  });
  return res.data;
};
