import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, typography } from "../../shared/styles";

const textHeight = {
  h1: "3.75rem",
  h2: "2.5rem",
  h3: "2rem",
  h4: "1.75rem",
  large: "1.75rem",
  paragraph: "1.5rem",
  small: "1.25rem",
  button: "1.25rem",
};

const Layout = styled.div`
  border: 0;
  letter-spacing: -0.02rem;
  font-weight: ${(props) => typography.weight[props.weight]};
  background-color: none;
  color: ${(props) => color[props.color]};
  font-size: ${(props) => typography.size[props.size]};
  line-height: ${(props) => textHeight[props.size]};
`;

const SIZE = {
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
  return <Layout {...props}> {children}</Layout>;
};
Typography.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZE)),
  weight: PropTypes.string,
  color: PropTypes.string,
};

Typography.defaultProps = {
  size: SIZE.PARAGRAPH,
  color: "black",
  weight: "regular",
};

export default Typography;
