import React, { useRef } from "react";

import { useRecoilValue } from "recoil";
import { themeState, communitySearch } from "@/recoil";
import { useIntersectionObserver } from "@/hooks";
import { GetCommunityList, CommunityFeedSelector } from "@/api";

import { FetchBox } from "./CommunityFeedGrid.styled";
import { CommunityNoContent } from "@/containers";
import { FeedGrid } from "@/components";

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
      {!feedData[0] && <CommunityNoContent theme={theme} />}
      <FeedGrid data={feedData} theme={theme} />
      <FetchBox ref={loader} />
    </>
  );
};

export default CommunityFeedGrid;
