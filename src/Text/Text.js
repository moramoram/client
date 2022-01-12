import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { color, typography } from "../shared/styles";

const TextWrapper = styled.div`
  border: 0;
  letter-spacing: -0.02rem;
  font-weight: ${typography.weight.regular}
    ${(props) =>
      css`
        background: ${color[props.blackgroundColor]};
      `};

  ${(props) =>
    props.type === TYPE.H1 &&
    css`
      font-size: ${typography.size.h1};
      line-height: 3.75rem;
    `};
  ${(props) =>
    props.type === TYPE.H2 &&
    css`
      font-size: ${typography.size.h2};
      line-height: 2.5rem;
    `};
  ${(props) =>
    props.type === TYPE.H3 &&
    css`
      font-size: ${typography.size.h3};
      line-height: 2rem;
    `};
  ${(props) =>
    props.type === TYPE.H4 &&
    css`
      font-size: ${typography.size.h4};
      line-height: 1.75rem;
    `};
  ${(props) =>
    props.type === TYPE.LARGE &&
    css`
      font-size: ${typography.size.large};
      line-height: 1.75rem;
    `};
  ${(props) =>
    props.type === TYPE.PARAGRAPH &&
    css`
      font-size: ${typography.size.paragraph};
      line-height: 1.5rem;
    `};

  ${(props) =>
    props.type === TYPE.SMALL &&
    css`
      font-size: ${typography.size.small};
      line-height: 1.25rem;
    `};
  ${(props) =>
    props.type === TYPE.BUTTON &&
    css`
      font-size: ${typography.size.b1};
      font-weight: 700;
      line-height: 1.25rem;
    `};
`;

const TYPE = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  LARGE: "large",
  PARAGRAPH: "paragraph",
  SMALL: "small",
  BUTTON: "button",
};

/**
 * **Texts?!** We don't need no stinkin' Texts!!
 */
export function Text({ children, ...props }) {
  return <TextWrapper {...props}>{children}</TextWrapper>;
}
Text.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)),
  color: PropTypes.string,
};

Text.defaultProps = {
  type: "primary",
  color: "white",
};
