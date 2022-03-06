import React from "react";
import PropTypes from "prop-types";

import { Text } from "./Typography.styled";

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
