import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { color, typography } from "../shared/styles";
import { Text } from "../Text/Text";

const BadgeWrapper = styled.div`
  display: inline-block;
  vertical-align: center;
  height: 20px;
  min-width: 48px;
  line-height: 0.75rem;
  padding: 4px 8px;
  border-radius: 8px;
  font-weight: ${typography.weight.regular};
  font-size: 0.625rem;

  svg {
    height: 12px;
    width: 12px;
    margin-right: 4px;
    margin-top: -2px;
  }

  ${(props) =>
    css`
      color: ${color[props.color]};
      background: ${color[props.blackgroundColor]};
    `};

  ${(props) =>
    props.type === TYPE.PRIMARY &&
    css`
      color: ${color.white};
      background: ${color.blue100};
    `};

  ${(props) =>
    props.type === TYPE.SECONDARY &&
    css`
      color: ${props.isDarkmode ? color.gray25 : color.gray600};
      background: ${props.isDarkmode ? color.gray700 : color.gray200};
    `};
`;

const TYPE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

/**
 * **Badges?!** We don't need no stinkin' badges!!
 */
export function Badge({ children, ...props }) {
  return (
    <BadgeWrapper {...props}>
      <Text>{children}</Text>
    </BadgeWrapper>
  );
}

Badge.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)),
  blackgroundColor: PropTypes.string,
  color: PropTypes.string,
  isLoading: PropTypes.bool,
  isDarkmode: PropTypes.bool,
};

Badge.defaultProps = {
  type: "primary",
  blackgroundColor: "blue200",
  color: "white",
  isLoading: false,
  isDarkmode: false,
};
