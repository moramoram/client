import { axiosInstance } from "@/utils";

export const PutStudy = async (studyId, data) => {
  const res = await axiosInstance({
    url: `/studies/${studyId}`,
    method: "put",
    data,
  });
  console.log(res);
  return res.data;
};
