import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { fontSize, fontWeight, lineHeight } from "../../_shared";

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

const Typography = ({ children, ...props }) => {
  return <Text {...props}> {children}</Text>;
};

Typography.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)),
};

Typography.defaultProps = {
  type: TYPE.PARAGRAPH,
};

export default Typography;

const textSize = {
  h1: fontSize.h1,
  h2: fontSize.h2,
  h3: fontSize.h3,
  h4: fontSize.h4,
  large: fontSize.lg,
  paragraph: fontSize.p,
  small: fontSize.sm,
  button: fontSize.sm,
};

const textHeight = {
  h1: lineHeight.h1,
  h2: lineHeight.h2,
  h3: lineHeight.h3,
  h4: lineHeight.h4,
  large: lineHeight.lg,
  paragraph: lineHeight.p,
  small: lineHeight.sm,
  button: "0.875rem",
};

const textWeight = {
  h1: fontWeight.bold,
  h2: fontWeight.bold,
  h3: fontWeight.bold,
  h4: fontWeight.bold,
  large: fontWeight.regular,
  paragraph: fontWeight.regular,
  sm: fontWeight.regular,
  button: fontWeight.bold,
};

const Text = styled.div`
  font-weight: ${(props) => textWeight[props.type]};
  font-size: ${(props) => textSize[props.type]};
  line-height: ${(props) => textHeight[props.type]};
`;
