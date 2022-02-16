import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "@/foundations";
import { colors, fontSize, fontWeight, loadings } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const CardSmallCreate = ({ content, ...props }) => {
  return (
    <Layout {...props}>
      <Thumbnail {...props}>
        <Icon icon="plus" stroke={colors.gray500} />
      </Thumbnail>
      <TextBox>
        <Title {...props}>{content}</Title>
      </TextBox>
    </Layout>
  );
};

CardSmallCreate.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
};

CardSmallCreate.defaultProps = {
  theme: THEME.LIGHT,
};

export default CardSmallCreate;

const bgColor = {
  light: colors.gray25,
  dark: colors.gray900,
};

const borderColor = {
  light: colors.gray200,
  dark: colors.gray800,
};

const Layout = styled.div`
  width: 220px;
  user-select: none;
`;

const TextBox = styled.div`
  div {
    display: inline-block;
    border-radius: 4px;
    animation: ${(props) => props.isLoading && loadings[props.theme]};
  }
`;

const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 220px;
  height: 110px;
  margin-bottom: 16px;
  border: 2px dashed ${(props) => borderColor[props.theme]};
  border-radius: 8px;
`;

const Title = styled.div`
  min-width: 160px;
  min-height: ${fontSize.p};

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.sm};
  color: ${colors.gray500};
`;
