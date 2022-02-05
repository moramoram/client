import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, fontSize, fontWeight } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const StudyCreateIntro = ({ ...props }) => {
  return (
    <>
      <Layout {...props}>
        <Title {...props}>스터디 모집</Title>
        <SubTitle {...props}>
          스터디를 직접 개설하고 동료들을 모아보세요
        </SubTitle>
      </Layout>
    </>
  );
};

StudyCreateIntro.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

StudyCreateIntro.defaultProps = {
  theme: THEME.LIGHT,
};

export default StudyCreateIntro;

const bgColor = {
  light: colors.gray25,
  dark: colors.gray900,
};

const titleColor = {
  light: colors.gray800,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 400px;
  background: ${(props) => bgColor[props.theme]};
`;

const Title = styled.div`
  padding-top: 68px;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
  color: ${(props) => titleColor[props.theme]};
`;

const SubTitle = styled.div`
  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
`;
