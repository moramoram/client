import React, { useRef } from "react";
import PropTypes from "prop-types";

import { useRecoilValue } from "recoil";
import { themeState, communitySearch } from "@/recoil";
import { useIntersectionObserver } from "@/hooks";
import { GetMyCommunityList, CommunityFeedSelector } from "@/api";

import { Layout, Title, SubTitle, FetchBox } from "./MyFeed.styled";
import { CommunityNoContent } from "@/containers/CommunityPage";
import { FeedGrid } from "@/components";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MyFeed = () => {
  const theme = useRecoilValue(themeState);
  const search = useRecoilValue(communitySearch);

  const loader = useRef(null);
  const { data, fetchNextPage, hasNextPage } = GetMyCommunityList(search);
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
    <Layout>
      <Title theme={theme}>내가 쓴 글</Title>
      <SubTitle theme={theme}>
        커뮤니티에 총 {feedData.length}개의 글을 남겼어요
      </SubTitle>
      {!feedData[0] && <CommunityNoContent theme={theme} />}
      <FeedGrid data={feedData} theme={theme} />
      <FetchBox ref={loader} />
    </Layout>
  );
};

MyFeed.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

MyFeed.defaultProps = {
  theme: THEME.LIGHT,
};

export default MyFeed;
