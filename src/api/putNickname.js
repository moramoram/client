import { axiosInstance } from "@/utils";

export const PutNickname = async (data) => {
  const res = await axiosInstance({
    url: "/users/nickname",
    method: "put",
    data,
  });
  console.log(res);
  return res.data;
};
