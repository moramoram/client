import React, { useRef } from "react";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";
import {
  useDummyApi,
  // GetInfiniteQuery,
  useIntersectionObserver,
  convertToStudyCard,
} from "@/hooks";

import { CardGrid } from "@/containers";

const StudyCardGrid = () => {
  const theme = useRecoilValue(themeState);
  const loader = useRef(null);
  // const { data, fetchNextPage } = GetInfiniteQuery();

  const { data } = useDummyApi();

  const onFetchNewData = () => {
    console.log(data.name);

    const token = localStorage.getItem("token");
    if (token) {
      console.log(data.name);
    }
  };

  const { cardData } = convertToStudyCard(mockdata);

  useIntersectionObserver({
    target: loader,
    onIntersect: onFetchNewData,
  });

  return (
    <>
      <CardGrid data={cardData} theme={theme} />
      <div ref={loader} />
    </>
  );
};

export default StudyCardGrid;

const mockdata = [
  {
    studyId: 13,
    writerInfo: {
      nickname: "su",
      ordinal: 0,
      campus: null,
      authCheck: 0,
    },
    title: "네이버 웹툰 스터디 구해요.",
    tech_stack: "java",
    recruitment: 0,
  },
  {
    studyId: 12,
    writerInfo: {
      nickname: "su",
      ordinal: 0,
      campus: null,
      authCheck: 0,
    },
    title: "네이버 1차 면접 스터디 구해용",
    tech_stack: "기타",
    recruitment: 0,
  },
  {
    studyId: 11,
    writerInfo: {
      nickname: "su",
      ordinal: 0,
      campus: null,
      authCheck: 0,
    },
    title: "삼전 코테 대비 알고리즘 스터디 구합니다.",
    tech_stack: "java",
    recruitment: 0,
  },
];
