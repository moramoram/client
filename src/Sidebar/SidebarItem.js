import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Icon } from "../Icon/Icon";
import { glowLight, glowDark } from "../shared/animation";

import { color, typography } from "../shared/styles";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const textColor = {
  light: color.gray900,
  dark: color.gray25,
};

const loadingAnimation = {
  light: css`
    ${glowLight} 1.5s ease-in-out infinite
  `,
  dark: css`
    ${glowDark} 1.5s ease-in-out infinite
  `,
};

const Title = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 124px;
  height: 20px;

  font-size: ${typography.size.paragraph};
  font-weight: ${typography.weight.bold};
  text-overflow: ellipsis;
  white-space: nowrap;

  svg {
    height: ${typography.size.large};
    width: ${typography.size.h4};
    margin-right: 10px;
    margin-top: -2px;
  }
`;

const Content = styled.div`
  display: inline-block;
  overflow: hidden;
  height: 20px;

  font-size: ${typography.size.paragraph};
  font-weight: ${typography.weight.regular};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SidebarItemWrapper = styled.div`
  display: flex;
  border-radius: 8px;

  width: 400px;
  height: 36px;
  padding: 8px 10px;

  color: ${(props) => textColor[props.theme]};
  animation: ${(props) => props.isLoading && loadingAnimation[props.theme]};
`;

export function SidebarItem({ contents, isLoading, ...props }) {
  const textcontents = isLoading ? {} : contents;
  return (
    <SidebarItemWrapper isLoading={isLoading} {...props}>
      <Title {...props}>
        <Icon icon={textcontents.icon} />
        {textcontents.title}
      </Title>
      <Content>{textcontents.description}</Content>
    </SidebarItemWrapper>
  );
}

SidebarItem.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  contents: PropTypes.objectOf(String).isRequired,
};

SidebarItem.defaultProps = {
  theme: THEME.LIGHT,
  isLoading: false,
  contents: {
    title: "직무",
    description: "프론트엔드",
    icon: "briefcase",
  },
};
