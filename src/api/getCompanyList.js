import { useQuery } from "react-query";
import { axiosInstance } from "@/utils";

export const GetCompanyList = () =>
  useQuery("getCompanyList", () => fetchData());

const fetchData = async () => {
  const res = await axiosInstance({
    url: "/companies",
  });
  return res.data;
};
