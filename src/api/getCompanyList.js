import { useQuery } from "react-query";
import { axiosInstance } from "@/utils";

export const GetCompanyList = () =>
  useQuery("getCompanyList", () => getCompanyList(), { suspense: false });

export const getCompanyList = async () => {
  const res = await axiosInstance({
    url: "/companies",
  });
  return res.data;
};
