import React, { useRef } from "react";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil";
import { useIntersectionObserver } from "@/hooks";
import {
  GetDummyApi,
  // GetInfiniteQuery,
} from "@/queries";
import { CardGrid } from "@/containers";

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

const cardData = new Array(24).fill({
  contents: {
    title: "주니어 프론트엔드 채용",
    subtitle: "싸페 디자인 시스템",
    highlight: "D-day",
    src: "",
  },
  badges: ["JavaScript", "React", "Vue.js"],
  id: "/job/1",
});
