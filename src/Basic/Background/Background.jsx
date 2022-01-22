import React from "react";
import styled from "styled-components";

import { colors } from "../../_shared";

const Background = ({ ...props }) => {
  return <Layout {...props} />;
};

const bgColors = {
  dark: colors.black,
  blue: colors.blue100,
  light: colors.white,
};

const Layout = styled.div`
  padding: 5rem;
  border-radius: 12px;
  background-color: ${(props) => bgColors[props.theme]};
`;

export default Background;
