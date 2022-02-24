import { axiosInstance } from "@/utils";

export const PutStudyRecruits = async (id) => {
  const res = await axiosInstance({
    url: `/studies/${id}/recruitments`,
    method: "put",
  });
  return res.data;
};
