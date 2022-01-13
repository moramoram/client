import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { color } from "../shared/styles";
import { glowLight, glowDark } from "../shared/animation";

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const BadgeWrapper = styled.div`
  display: inline-block;

  height: 20px;
  min-width: 48px;
  padding: 4px 8px;
  border-radius: 8px;

  text-align: center;
  vertical-align: center;
  line-height: 0.75rem;
  font-size: 0.625rem;

  svg {
    height: 0.625rem;
    width: 0.625rem;
    margin-right: 4px;
  }

  animation: ${(props) =>
    props.isLoading &&
    props.isDarkmode &&
    css`
      ${glowDark} 1.5s ease-in-out infinite;
    `};

  animation: ${(props) =>
    props.isLoading &&
    !props.isDarkmode &&
    css`
      ${glowLight} 1.5s ease-in-out infinite;
    `};

  ${(props) =>
    css`
      background: ${color[props.blackgroundColor]};
      font-weight: ${props.isBold ? "700" : "400"};
      color: ${color[props.color]};
    `};

  ${(props) =>
    props.type === TYPE.PRIMARY &&
    css`
      background: ${color.blue100};
      color: ${color.white};
    `};

  ${(props) =>
    props.type === TYPE.SECONDARY &&
    css`
      background: ${props.isDarkmode ? color.gray800 : color.gray100};
      color: ${props.isDarkmode ? color.gray25 : color.gray600};
    `};

  ${(props) =>
    props.isLoading &&
    `
        background: ${props.isDarkmode ? color.gray800 : color.gray50};
      `};
`;

const TYPE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

/**
 * **Badges?!** We don't need no stinkin' badges!!
 */
export function Badge({ children, isLoading, ...props }) {
  const badgeinner = <>{isLoading ? <Text></Text> : <Text>{children}</Text>}</>;
  return (
    <BadgeWrapper isLoading={isLoading} {...props}>
      {badgeinner}
    </BadgeWrapper>
  );
}

Badge.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)),
  blackgroundColor: PropTypes.string,
  color: PropTypes.string,
  isBold: PropTypes.bool,
  isLoading: PropTypes.bool,
  isDarkmode: PropTypes.bool,
};

Badge.defaultProps = {
  type: "primary",
  blackgroundColor: "blue200",
  color: "white",
  isBold: false,
  isLoading: false,
  isDarkmode: false,
};
