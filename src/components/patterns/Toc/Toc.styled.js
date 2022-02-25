import styled from "styled-components";
import { colors } from "@/_shared";

const borderColor = {
  dark: colors.gray700,
  light: colors.gray200,
};

export const Layout = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};
`;
