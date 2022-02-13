import { axiosInstance } from "@/utils";

export const PostStudy = async (data) => {
  const res = await axiosInstance({
    url: "/studies",
    method: "post",
    data,
  });
  console.log(res);
  return res.data;
};
