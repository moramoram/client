import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil";
import { useIntersectionObserver } from "@/hooks";
import { StudyCardSelector, GetMyStudyList } from "@/api";

import { StudyNoContent } from "@/containers";
import { CardGrid } from "@/layouts";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

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
      <div ref={loader} />
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
