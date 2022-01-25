import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Button } from "@/components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const StudyIntro = ({ ...props }) => {
  return (
    <Layout>
      <Title {...props}>스터디 모집</Title>

      <SubTitle {...props}>함께 성장할 동료들을 찾아보세요.</SubTitle>
      <ButtonLink to="/job/create">
        <Button mode="primary">스터디 개설하기</Button>
      </ButtonLink>
    </Layout>
  );
};

StudyIntro.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

StudyIntro.defaultProps = {
  theme: THEME.LIGHT,
};

export default StudyIntro;

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
  background: ${colors.gray25};

  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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

const ButtonLink = styled(Link)`
  text-decoration: none;
`;
