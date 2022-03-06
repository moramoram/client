import React from "react";
import PropTypes from "prop-types";

import { Layout, Title, SubTitle } from "./JobIntro.styled";

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
