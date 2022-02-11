import React from "react";
import { IntroSlider } from "@/layouts";

const MainIntroSlider = ({ ...props }) => {
  return <IntroSlider data={sliderData} {...props} />;
};

export default MainIntroSlider;

const sliderData = [
  {
    recruitId: 1,
    company: {
      companyId: 1,
      companyName: "카카오",
      logoImg: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
    },
    title: "신입 개발자 블라인드 채용",
    job: "프론트엔드개발",
    techStack: "React.js,Vue.js,Angular.js",
    openDate: "2022-01-23T05:00:00",
    closeDate: "2022-02-04T22:00:00",
    scrapStatus: false,
    sbenefit: false,
  },
  {
    recruitId: 2,
    company: {
      companyId: 2,
      companyName: "토스",
      logoImg: "https://i.imgur.com/nZb7dUW.png",
    },
    title: "프론트엔드 개발자 채용",
    job: "프론트엔드개발",
    techStack: "React.js,Vue.js,Angular.js",
    openDate: "2022-01-23T05:00:00",
    closeDate: "2022-02-04T22:00:00",
    scrapStatus: false,
    sbenefit: false,
  },
  {
    recruitId: 3,
    company: {
      companyId: 3,
      companyName: "네이버",
      logoImg: "https://i.imgur.com/6RMJITi.png",
    },
    title: "2022년 상반기 네이버 신입 공채 : 기술직군",
    job: "프론트엔드개발",
    techStack: "React.js,Vue.js,Angular.js",
    openDate: "2022-01-23T05:00:00",
    closeDate: "2022-02-04T22:00:00",
    scrapStatus: false,
    sbenefit: false,
  },
];
