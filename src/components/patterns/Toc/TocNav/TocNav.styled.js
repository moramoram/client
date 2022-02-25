import styled from "styled-components";
import { colors } from "@/_shared";

const bgColors = {
  dark: colors.black,
  light: colors.white,
};

const borderColor = {
  dark: colors.gray700,
  light: colors.gray200,
};

export const Layout = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 60px;
  padding-left: 468px;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};

  background-color: ${(props) => bgColors[props.theme]};
`;
