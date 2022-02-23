import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState, communitySearch } from "@/recoil";
import { useIntersectionObserver } from "@/hooks";
import { GetMyCommunityList, CommunityFeedSelector } from "@/api";

import { CommunityNoContent } from "@/containers";
import { FeedGrid } from "@/components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

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

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 86px;
`;

const Title = styled.div`
  line-height: ${lineHeight.h2};
  margin-bottom: 0.5rem;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => titleColor[props.theme]};
`;

const SubTitle = styled.div`
  margin-bottom: 3rem;

  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
`;

const FetchBox = styled.div`
  height: 30px;
`;
