import { axiosInstance } from "@/utils";

export const PutAuthorization = async (data) => {
  const res = await axiosInstance({
    url: "/users",
    method: "put",
    data,
  });
  return res.data;
};
