import React, { useRef } from "react";

import { useRecoilValue } from "recoil";
import { themeState, studySearch, studyfilter } from "@/recoil";

import { useIntersectionObserver } from "@/hooks";
import { StudyCardSelector, GetStudyList } from "@/api";

import { StudyNoContent } from "@/containers";
import { CardGrid } from "@/layouts";

const StudyCardGrid = () => {
  const theme = useRecoilValue(themeState);
  const search = useRecoilValue(studySearch);
  const filter = useRecoilValue(studyfilter);
  const loader = useRef(null);
  const { data, fetchNextPage, hasNextPage } = GetStudyList(search);
  const { cardData } = StudyCardSelector(data);

  const cardItems = !filter
    ? cardData
    : cardData.filter((data) => !data.isDisabled);

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
      {!cardItems[0] && <StudyNoContent theme={theme} />}
      <CardGrid data={cardItems} theme={theme} />
      <div ref={loader} />
    </>
  );
};

export default StudyCardGrid;
