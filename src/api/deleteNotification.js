import { axiosInstance } from "@/utils";

export const DeleteNotification = async (notificationId) => {
  const res = await axiosInstance({
    url: `/notifications/${notificationId}`,
    method: "delete",
  });
  return res.data;
};

export const DeleteNotificationsAll = async () => {
  const res = await axiosInstance({
    url: `/notifications`,
    method: "delete",
  });
  return res.data;
};
