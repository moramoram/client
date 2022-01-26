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
    <>
      <Layout>
        <Title {...props}>스터디 모집</Title>
        <SubTitle {...props}>함께 성장할 동료들을 찾아보세요.</SubTitle>
        <ButtonLink to="/job/create">
          <Button mode="primary">스터디 개설하기</Button>
        </ButtonLink>
      </Layout>
    </>
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

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 400px;
  background: url("https://i.imgur.com/75UN6MO.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  overflow: hidden;
`;

const Title = styled.div`
  padding-top: 2rem;

  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
  color: ${colors.gray25};
`;

const SubTitle = styled.div`
  padding: 1rem 0 2rem 0;

  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
`;
