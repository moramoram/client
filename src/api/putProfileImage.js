import { axiosInstance } from "@/utils";

export const PutProfileImage = async (data) => {
  const res = await axiosInstance({
    url: "/users/profile-images",
    method: "put",
    data,
  });
  return res.data;
};
