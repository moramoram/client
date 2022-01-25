import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const JobIntro = ({ ...props }) => {
  return (
    <>
      <EmptyBox />
      <Layout>
        <Title {...props}>채용정보</Title>
        <SubTitle {...props}>
          열정 가득한 당신을 원하는 회사들을 모아봤어요.
        </SubTitle>
      </Layout>
    </>
  );
};

JobIntro.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

JobIntro.defaultProps = {
  theme: THEME.LIGHT,
};

export default JobIntro;

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

  width: 100vw;
  height: 320px;
  background: ${colors.gray200};

  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const EmptyBox = styled.div`
  width: 100vw;
  height: 82px;
  background: ${colors.gray200};
`;

const Title = styled.div`
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
