import React from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { colors } from "@/_shared";

const EmptyPage = () => {
  const theme = useRecoilValue(themeState);

  return <Layout theme={theme}></Layout>;
};

export default EmptyPage;

const bgColor = {
  light: colors.white,
  dark: colors.black,
};

const Layout = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => bgColor[props.theme]};
`;
