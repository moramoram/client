import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MyComment = ({ ...props }) => {
  return (
    <Layout>
      <Title {...props}>내가 쓴 댓글</Title>
      <SubTitle {...props}>내가 쓴 댓글을 확인하세요.</SubTitle>
    </Layout>
  );
};

MyComment.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

MyComment.defaultProps = {
  theme: THEME.LIGHT,
};

export default MyComment;

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
