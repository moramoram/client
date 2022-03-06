import { axiosInstance } from "@/utils";

export const DeleteUser = async () => {
  const res = await axiosInstance({
    url: "/users",
    method: "delete",
  });
  return res.data;
};
