import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "@/foundations";
import { colors, fontSize, fontWeight, loadings } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const textColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const SideBarItem = ({ title, description, icon, isLoading, ...props }) => {
  const text = isLoading ? "" : title;
  const desc = isLoading ? "" : description;
  const iconname = isLoading ? "" : icon;
  return (
    <Layout {...props}>
      <TitleBox isLoading={isLoading} {...props}>
        <Icon icon={iconname} width="18" height="18" />
        <Title>{text}</Title>
      </TitleBox>
      <Content isLoading={isLoading} {...props}>
        {desc}
      </Content>
    </Layout>
  );
};

SideBarItem.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};

SideBarItem.defaultProps = {
  theme: THEME.LIGHT,
  isLoading: false,
};

export default SideBarItem;

const Layout = styled.div`
  display: flex;
  align-items: center;

  border-radius: 4px;

  width: 400px;
  height: 36px;
  padding: 0 10px;

  color: ${(props) => textColor[props.theme]};
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 124px;
  height: 20px;
  margin-right: 10px;
  border-radius: 4px;

  font-size: ${fontSize.p};
  font-weight: ${fontWeight.bold};
  white-space: nowrap;

  animation: ${(props) => props.isLoading && loadings[props.theme]};
`;

const Title = styled.div``;

const Content = styled.div`
  display: inline-block;
  overflow: hidden;

  width: 244px;
  height: 20px;
  border-radius: 4px;

  font-size: ${fontSize.p};
  font-weight: ${fontWeight.regular};
  text-overflow: ellipsis;
  white-space: nowrap;

  animation: ${(props) => props.isLoading && loadings[props.theme]};
`;
