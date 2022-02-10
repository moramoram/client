import { useQuery } from "react-query";
import { axiosInstance } from "@/utils";

export const GetUserProfile = () =>
  useQuery(["getUserProfile"], () => fetchData());

const fetchData = async () => {
  const res = await axiosInstance({
    url: "/users/me",
  });
  console.log(res.data);
  return res.data;
};

export const UserProfileSelector = (user) => {
  const profileData = {
    authCheck: user.authCheck,
    campus: user.campus,
    email: user.email,
    likeJob: user.likeJob,
    nickname: user.nickname,
    ordinal: user.ordinal,
    profileImg: user.profileImg,
    realName: user.realName,
    userId: user.userId,
  };
  return profileData;
};
