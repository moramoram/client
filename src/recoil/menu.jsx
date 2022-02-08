import { atom } from "recoil";

export const navMenuData = atom({
  key: "navMenuData",
  default: [
    {
      name: "community",
      title: "커뮤니티",
      url: "community",
    },
    {
      name: "study",
      title: "스터디",
      url: "study",
    },
    {
      name: "job",
      title: "취업정보",
      url: "job",
    },
  ],
});

export const navUserData = atom({
  key: "navUserData",
  default: [
    {
      name: "mypage",
      title: "내 프로필",
      url: "mypage",
    },
  ],
});
