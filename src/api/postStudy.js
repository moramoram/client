import { axiosInstance } from "@/utils";

export const PostStudy = async (data) => {
  const res = await axiosInstance({
    url: "/studies",
    method: "post",
    data,
  });
  return res.data;
};
