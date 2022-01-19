import React from "react";
import styled from "styled-components";

import { color } from "../../shared/styles";

const Background = ({ ...props }) => {
  return <Layout {...props} />;
};

const bgColors = {
  dark: color.black,
  blue: color.blue100,
  light: color.white,
};

const Layout = styled.div`
  display: flex;
  padding: 5rem;
  border-radius: 12px;
  background-color: ${(props) => bgColors[props.theme]};
`;

export default Background;
