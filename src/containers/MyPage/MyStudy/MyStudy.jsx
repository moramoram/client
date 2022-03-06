import React, { useRef } from "react";
import PropTypes from "prop-types";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil";
import { useIntersectionObserver } from "@/hooks";
import { StudyCardSelector, GetMyStudyList } from "@/api";

import { Layout, Title, SubTitle, FetchBox } from "./MyStudy.styled";
import { StudyNoContent } from "@/containers";
import { CardGrid } from "@/components";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MyStudy = () => {
  const theme = useRecoilValue(themeState);
  const loader = useRef(null);
  const { data, fetchNextPage, hasNextPage } = GetMyStudyList();
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
    <Layout>
      <Title theme={theme}>나의 스터디</Title>
      <SubTitle theme={theme}>
        지금까지 {cardData.length}개의 스터디를 개설했어요
      </SubTitle>
      {!cardData[0] && <StudyNoContent theme={theme} />}
      <CardGrid data={cardData} theme={theme} />
      <FetchBox ref={loader} />
    </Layout>
  );
};

MyStudy.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

MyStudy.defaultProps = {
  theme: THEME.LIGHT,
};

export default MyStudy;
