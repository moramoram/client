import React, { useRef } from "react";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil";
import { useIntersectionObserver } from "@/hooks";
import {
  GetDummyApi,
  // GetInfiniteQuery,
  JobCardSelector,
} from "@/api";
import { CardGrid } from "@/layouts";

const JobCardGrid = () => {
  const theme = useRecoilValue(themeState);
  const loader = useRef(null);
  // const { data, fetchNextPage } = GetInfiniteQuery();

  const { data } = GetDummyApi();

  const onFetchNewData = () => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log(data.name);
    }
  };
  const { cardData } = JobCardSelector(mockdata);

  useIntersectionObserver({
    target: loader,
    onIntersect: onFetchNewData,
    enabled: false,
  });

  return (
    <>
      <CardGrid data={cardData} theme={theme} />
      <div ref={loader} />
    </>
  );
};

export default JobCardGrid;

const mockdata = new Array(24).fill({
  recruitId: 1,
  company: {
    companyId: 1,
    companyName: "네이버",
    logoImg: "naver.png",
  },
  title: "카카오 모집",
  job: "프론트엔드개발",
  techStack: "React.js,Vue.js,Angular.js",
  openDate: "2022-01-23T05:00:00",
  closeDate: "2022-02-04T22:00:00",
  scrapStatus: false,
  sbenefit: false,
});
