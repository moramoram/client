import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Icon } from "../../Basic/Icon";
import { glowLight, glowDark } from "../../shared/animation";
import { color, typography } from "../../shared/styles";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const textColor = {
  light: color.gray900,
  dark: color.gray25,
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
  border-radius: 8px;

  font-size: ${typography.size.paragraph};
  font-weight: ${typography.weight.bold};
  text-overflow: ellipsis;
  white-space: nowrap;
  animation: ${(props) => props.isLoading && loadingAnimation[props.theme]};
  margin-right: 10px;
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
  width: 244px;
  height: 20px;
  border-radius: 8px;

  font-size: ${typography.size.paragraph};
  font-weight: ${typography.weight.regular};
  text-overflow: ellipsis;
  white-space: nowrap;
  animation: ${(props) => props.isLoading && loadingAnimation[props.theme]};
`;

const SideBarItemWrapper = styled.div`
  display: flex;
  border-radius: 8px;

  width: 400px;
  height: 36px;
  padding: 8px 10px;

  color: ${(props) => textColor[props.theme]};
`;
