import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "../Icon/Icon";

import { color, typography } from "../shared/styles";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const textColor = {
  light: color.gray900,
  dark: color.gray25,
};

const Title = styled.span`
  display: inline-block;
  overflow: hidden;

  width: 124px;
  height: 20px

  font-size: ${typography.size.paragraph};
  font-weight: ${typography.weight.bold};
  line-height: ${typography.size.paragraph};
  text-overflow: ellipsis;
  white-space: nowrap;

  svg {
    height: ${typography.size.large};
    width: ${typography.size.large};
    margin-right: 10px;
    margin-top: -2px;
  }
`;

const Content = styled.span`
  display: inline-block;
  overflow: hidden;

  height: 20px

  font-size: ${typography.size.paragraph};
  font-weight: ${typography.weight.regular};
  line-height: ${typography.size.paragraph};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SidebarItemWrapper = styled.div`
  display: flex;

  width: 400px;
  height: 36px;
  padding: 8px 10px;

  color: ${(props) => textColor[props.theme]};
`;

export function SidebarItem({ contents, ...props }) {
  return (
    <SidebarItemWrapper {...props}>
      <Title {...props}>
        <Icon icon={contents.icon} />
        {contents.title}
      </Title>
      <Content>{contents.description}</Content>
    </SidebarItemWrapper>
  );
}

SidebarItem.propTypes = {
  contents: PropTypes.objectOf(PropTypes.string).isRequired,
  theme: PropTypes.oneOf(Object.values(THEME)),
};

SidebarItem.defaultProps = {
  theme: THEME.LIGHT,
  contents: {
    title: "직무",
    description: "프론트엔드",
    icon: "briefcase",
  },
};
