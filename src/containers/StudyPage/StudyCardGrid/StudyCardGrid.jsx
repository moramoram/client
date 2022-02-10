import React, { useRef } from "react";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";
import { useIntersectionObserver } from "@/hooks";
import { StudyCardSelector } from "@/queries";

import { CardGrid } from "@/containers";

const StudyCardGrid = () => {
  const theme = useRecoilValue(themeState);
  const loader = useRef(null);
  // const { data, fetchNextPage, hasNextPage } = GetStudyitems();

  // const onFetchNewData = () => {
  //   fetchNextPage();
  // };

  // useIntersectionObserver({
  //   target: loader,
  //   onIntersect: onFetchNewData,
  //   enabled: hasNextPage,
  // });

  const { cardData } = StudyCardSelector(mockdata);

  useIntersectionObserver({
    target: loader,
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
