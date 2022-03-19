import styled, { css } from "styled-components";
import { colors, fontSize, fontWeight } from "@/_shared";

const textColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const hoverColor = {
  dark: colors.gray700,
  light: colors.gray100,
};

const avatarBgColor = {
  dark: colors.gray800,
  light: colors.gray50,
};

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 300px;

  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  :hover {
    background-color: ${(props) => hoverColor[props.theme]};
  }

  ${(props) =>
    props.status === "new" &&
    css`
      background-color: ${colors.blueOpacity50};
      :hover {
        background-color: ${colors.blueOpacity100};
      }
      :active {
        background-color: ${colors.blueOpacity50};
      }
    `}
`;

export const ContentBox = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;

  width: 100%;
`;

export const AvatarBox = styled.div`
  background-color: ${(props) => avatarBgColor[props.theme]};
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  min-height: 40px;
  width: 100%;

  color: ${(props) => textColor[props.theme]};
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.regular};

  white-space: pre-line;
`;

export const CreatedAt = styled.div`
  font-size: ${fontSize.xs};
  line-height: ${fontSize.xs};
  color: ${colors.gray500};
`;

export const CloseBox = styled.div`
  padding: 1rem;

  svg {
    stroke: ${colors.gray400};
  }
`;
