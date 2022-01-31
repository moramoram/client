import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const CommunityIntro = ({ ...props }) => {
  return (
    <>
      <Layout>
        <Title {...props}>커뮤니티</Title>
        <SubTitle {...props}>싸피인들끼리 자유롭게 소통하세요</SubTitle>
      </Layout>
    </>
  );
};

CommunityIntro.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

CommunityIntro.defaultProps = {
  theme: THEME.LIGHT,
};

export default CommunityIntro;

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
  justify-content: flex-end;
  /* align-items: center; */

  width: 100%;
  height: 300px;
  /* background: ${colors.gray200}; */

  flex-wrap: wrap;
  overflow: hidden;
`;

const Title = styled.div`
  padding-top: 68px;
  line-height: ${lineHeight.h2};
  margin-bottom: 15px;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
  color: ${(props) => titleColor[props.theme]};
`;

const SubTitle = styled.div`
  height: ${lineHeight.h4};
  margin-bottom: 27px;

  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
`;
