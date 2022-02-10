import { axiosInstance } from "@/utils";

export const DeleteProfileImage = async () => {
  const res = await axiosInstance({
    url: "/users/profile-images",
    method: "delete",
  });
  console.log(res);
  return res.data;
};
