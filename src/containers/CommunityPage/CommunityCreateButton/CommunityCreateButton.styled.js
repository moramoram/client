import styled, { css } from "styled-components";
import { colors, fontSize, fontWeight, shadows } from "@/_shared";

const bgColor = {
  light: colors.gray50,
  dark: colors.gray900,
};

const focusBgColor = {
  light: colors.white,
  dark: colors.black,
};

const borderColor = {
  light: colors.gray50,
  dark: colors.gray900,
};

export const Layout = styled.div`
  display: flex;
  align-items: center;

  height: 42px;
  max-width: 940px;
  margin: 6px 0;
  padding: 0 16px;
  border: 1px solid ${(props) => borderColor[props.theme]};
  border-radius: 8px;

  background-color: ${(props) => bgColor[props.theme]};
  box-shadow: ${shadows.button};

  font-size: ${fontSize.sm};
  color: ${colors.gray500};

  transition: 0.3s;
  cursor: text;

  svg {
    height: 18px;
    width: 18px;
  }

  ${(props) => css`
    :hover {
      border: 1px solid ${colors.blueOpacity200};
      box-shadow: inset 0 0 0 1px ${colors.blueOpacity200};
      background-color: ${focusBgColor[props.theme]};
    }
  `}
`;

export const Text = styled.div`
  width: 100%;
  margin-left: 8px;

  font-size: ${fontSize.p};
  font-weight: ${fontWeight.regular};
  color: ${colors.gray500};

  transition: 0.3s;
  user-select: none;
`;
