import React, { useRef } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState, jobSearch } from "@/recoil";
import { useIntersectionObserver } from "@/hooks";
import { GetJobList, JobCardSelector } from "@/api";

import { CardGrid } from "@/layouts";

const JobCardGrid = () => {
  const theme = useRecoilValue(themeState);
  const search = useRecoilValue(jobSearch);

  const loader = useRef(null);
  const { data, fetchNextPage, hasNextPage } = GetJobList(search);
  const { cardData } = JobCardSelector(data);

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
      <FetchBox ref={loader} />
    </>
  );
};

export default JobCardGrid;

const FetchBox = styled.div`
  height: 30px;
`;
