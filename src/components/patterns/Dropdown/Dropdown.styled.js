import styled from "styled-components";
import { colors, fontSize, fontWeight, shadows } from "@/_shared";

const borderColor = {
  dark: colors.gray800,
  light: colors.gray100,
};

const bgColor = {
  dark: colors.gray900,
  light: colors.white,
};

const textColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  width: 224px;
  border-radius: 8px;
  border: 1px solid ${(props) => borderColor[props.theme]};

  background-color: ${(props) => bgColor[props.theme]};
  box-shadow: ${shadows.base};
`;

export const UserInfo = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};

  font-size: ${fontSize.sm};
  color: ${(props) => textColor[props.theme]};

  user-select: none;
`;

export const UserName = styled.span`
  font-weight: ${fontWeight.bold};
`;

export const MenuBox = styled.ul`
  margin: 0;
  padding: 4px 0;

  a {
    text-decoration: none;
  }
`;
