import { useQuery } from "react-query";
import { axiosInstance } from "@/utils";

export const GetNotificationList = () =>
  useQuery(["getNotificationList"], () => fetchData());

const fetchData = async () => {
  const res = await axiosInstance({
    url: "/notifications",
  });
  return res.data;
};

export const GetNotification = async (id) => {
  const res = await axiosInstance({
    url: `/notifications/${id}`,
  });
  return res.data;
};
