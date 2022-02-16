import { axiosInstance } from "@/utils";

export const PutStudy = async (studyId, data) => {
  const res = await axiosInstance({
    url: `/studies/${studyId}`,
    method: "put",
    data,
  });
  return res.data;
};
