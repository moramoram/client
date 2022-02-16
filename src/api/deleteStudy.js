import { axiosInstance } from "@/utils";

export const DeleteStudy = async (studyId) => {
  const res = await axiosInstance({
    url: `/studies/${studyId}`,
    method: "delete",
  });

  return res.data;
};
