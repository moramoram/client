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
  background: url("/images/job-intro.webp");
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

  user-select: none;
`;

const SubTitle = styled.div`
  height: ${lineHeight.h4};
  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
  user-select: none;
`;
