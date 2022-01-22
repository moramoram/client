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

const SideBarItem = ({ contents, isLoading, ...props }) => {
  const textcontents = isLoading ? {} : contents;
  return (
    <SideBarItemWrapper {...props}>
      <Title isLoading={isLoading} {...props}>
        <Icon icon={textcontents.icon} />
        {textcontents.title}
      </Title>
      <Content isLoading={isLoading} {...props}>
        {textcontents.description}
      </Content>
    </SideBarItemWrapper>
  );
};

SideBarItem.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  contents: PropTypes.objectOf(String).isRequired,
};

SideBarItem.defaultProps = {
  theme: THEME.LIGHT,
  isLoading: false,
  contents: {
    title: "직무",
    description: "프론트엔드",
    icon: "briefcase",
  },
};

export default SideBarItem;

const Title = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 124px;
  height: 20px;
  border-radius: 4px;

  font-size: ${fontSize.p};
  font-weight: ${fontWeight.bold};
  text-overflow: ellipsis;
  white-space: nowrap;
  animation: ${(props) => props.isLoading && loadings[props.theme]};
  margin-right: 10px;
  svg {
    height: ${fontSize.lg};
    width: ${fontSize.h4};
    margin-right: 10px;
    margin-top: -2px;
  }
`;

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

const SideBarItemWrapper = styled.div`
  display: flex;
  border-radius: 4px;

  width: 400px;
  height: 36px;
  padding: 8px 10px;

  color: ${(props) => textColor[props.theme]};
`;
