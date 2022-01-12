import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { color, typography } from "../shared/styles";

const BadgeWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 11px;
  line-height: 12px;
  padding: 4px 12px;
  border-radius: 3em;
  font-weight: ${typography.weight.bold};

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
      color: ${color.white100};
      background: ${color.blue200};
    `};

  ${(props) =>
    props.type === TYPE.SECONDARY &&
    css`
      color: ${color.gray600};
      background: ${color.gray300};
    `};

  ${(props) =>
    props.type === TYPE.DARK &&
    css`
      color: ${color.gray25};
      background: ${color.gray700};
    `};
`;

const TYPE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DARK: "dark",
};

/**
 * **Badges?!** We don't need no stinkin' badges!!
 */
export function Badge({ ...props }) {
  return <BadgeWrapper {...props} />;
}
Badge.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)),
  blackgroundColor: PropTypes.string,
  color: PropTypes.string,
  isLoading: PropTypes.bool,
};

Badge.defaultProps = {
  type: "primary",
  blackgroundColor: "blue200",
  color: "white100",
  isLoading: false,
};
