import { axiosInstance } from "@/utils";

export const GetCompanyList = async () => {
  const res = await axiosInstance({
    url: "/companies",
  });
  return res.data;
};
