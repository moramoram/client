import React from "react";
import PropTypes from "prop-types";

import { Layout, Title, SubTitle } from "./CommunityIntro.styled";
import { Button } from "@/components";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const CommunityIntro = ({ ...props }) => {
  return (
    <>
      <Layout {...props}>
        <Title {...props}>커뮤니티</Title>
        <SubTitle {...props}>싸피인들끼리 자유롭게 소통하세요</SubTitle>
        <Button onClick={props.handleButtonClick}>게시글 작성하기</Button>
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
