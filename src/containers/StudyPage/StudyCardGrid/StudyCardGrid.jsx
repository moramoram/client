import React, { useRef } from "react";

import { useRecoilValue } from "recoil";
import { themeState, studySearch } from "@/recoil";

import { useIntersectionObserver } from "@/hooks";
import { StudyCardSelector, GetStudyList } from "@/api";

import { CardGrid } from "@/layouts";

const StudyCardGrid = () => {
  const theme = useRecoilValue(themeState);
  const search = useRecoilValue(studySearch);

  const loader = useRef(null);
  const { data, fetchNextPage, hasNextPage } = GetStudyList(search);
  const { cardData } = StudyCardSelector(data);

  const onFetchNewData = () => {
    fetchNextPage();
  };

  useIntersectionObserver({
    target: loader,
    onIntersect: onFetchNewData,
    enabled: hasNextPage,
  });

  return (
    <>
      <CardGrid data={cardData} theme={theme} />
      <div ref={loader} />
    </>
  );
};

export default StudyCardGrid;
