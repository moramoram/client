import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { CardGrid } from "@/containers";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MyStudy = () => {
  const theme = useRecoilValue(themeState);

  return (
    <Layout>
      <Title theme={theme}>나의 스터디</Title>
      <SubTitle theme={theme}>
        지금까지 {cardData.length}개의 스터디를 개설했어요
      </SubTitle>
      <CardGrid data={cardData} theme={theme} />
    </Layout>
  );
};

const cardData = new Array(2).fill({
  contents: {
    title: "알고리즘 스터디 모집",
    subtitle: "김싸피(6기 / 서울)",
    highlight: "모집중",
    src: "",
  },
  badges: ["JavaScript", "React", "Vue.js"],
  id: "/study/1",
});

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
  margin-bottom: 15px;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
  color: ${(props) => titleColor[props.theme]};
`;

const SubTitle = styled.div`
  margin-bottom: 3rem;

  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
`;
