import { axiosInstance } from "@/utils";

export const putStudyScrap = async (id) => {
  const res = await axiosInstance({
    url: `/studies/${id}/scraps`,
    method: "put",
  });
  return res.data;
};
