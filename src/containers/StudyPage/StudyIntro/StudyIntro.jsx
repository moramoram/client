import React from "react";
import PropTypes from "prop-types";

import { Layout, Title, SubTitle, ButtonLink } from "./StudyIntro.styled";
import { Button } from "@/components";

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
        <ButtonLink to="/study/create">
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
