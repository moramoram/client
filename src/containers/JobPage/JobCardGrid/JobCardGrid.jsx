import React, { useRef } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState, jobSearch, jobFilter } from "@/recoil";
import { useIntersectionObserver } from "@/hooks";
import { GetJobList, JobCardSelector } from "@/api";

import { JobNoContent } from "@/containers";
import { CardGrid } from "@/layouts";
import { jobilter } from "@/recoil/filter";

const JobCardGrid = () => {
  const theme = useRecoilValue(themeState);
  const search = useRecoilValue(jobSearch);
  const filter = useRecoilValue(jobFilter);

  const loader = useRef(null);
  const { data, fetchNextPage, hasNextPage } = GetJobList(search);
  const { cardData } = JobCardSelector(data);

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
      {!cardItems[0] && <JobNoContent theme={theme} />}
      <CardGrid data={cardItems} theme={theme} />
      <FetchBox ref={loader} />
    </>
  );
};

export default JobCardGrid;

const FetchBox = styled.div`
  height: 30px;
`;
