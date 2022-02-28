import styled from "styled-components";
import { colors, shadows } from "@/_shared";

const borderColor = {
  dark: colors.gray800,
  light: colors.gray100,
};

const bgColor = {
  dark: colors.gray900,
  light: colors.white,
};

const boxShadow = {
  dark: "2px 2px 4px rgba(0, 0, 0, 0.185)",
  light: shadows.base,
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: absolute;

  min-width: 100px;
  border-radius: 8px;
  border: 1px solid ${(props) => borderColor[props.theme]};

  background-color: ${(props) => bgColor[props.theme]};
  box-shadow: ${(props) => boxShadow[props.theme]};
`;

export const MenuBox = styled.ul`
  margin: 0;
  padding: 4px 0;

  > li {
    justify-content: center;
    padding: 0;
  }
`;
