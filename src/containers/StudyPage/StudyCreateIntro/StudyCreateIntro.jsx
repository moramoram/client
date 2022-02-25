import React from "react";
import PropTypes from "prop-types";

import { Layout, Title, SubTitle } from "./StudyCreateIntro.styled";

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
