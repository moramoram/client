import React, { useRef } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState, communitySearch } from "@/recoil";
import { useIntersectionObserver } from "@/hooks";
import { GetCommunityList, CommunityFeedSelector } from "@/api";

import { FeedGrid } from "@/layouts";

const CommunityFeedGrid = () => {
  const theme = useRecoilValue(themeState);
  const search = useRecoilValue(communitySearch);

  const loader = useRef(null);
  const { data, fetchNextPage, hasNextPage } = GetCommunityList(search);
  const { feedData } = CommunityFeedSelector(data);

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
      <FeedGrid data={feedData} theme={theme} />
      <FetchBox ref={loader} />
    </>
  );
};

export default CommunityFeedGrid;

const FetchBox = styled.div`
  height: 30px;
`;
