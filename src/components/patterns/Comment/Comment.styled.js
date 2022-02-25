import styled, { css } from "styled-components";
import { animations, colors, fontSize, fontWeight } from "@/_shared";

const usernameColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const userDetailColor = {
  dark: colors.gray400,
  light: colors.gray600,
};

const contentColor = {
  dark: colors.gray300,
  light: colors.gray700,
};

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;

  :hover .dropdown {
    opacity: 1;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
`;

export const DropdownBox = styled.div`
  position: relative;
  transition: 0.3s;
  opacity: 0;

  ${(props) =>
    props.isDropdownOpen &&
    css`
      opacity: 1;
    `}

  svg {
    stroke: ${colors.gray500};
    cursor: pointer;
  }

  > div {
    z-index: 9999;
    right: 0px;
    animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

export const User = styled.div`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.sm};
  color: ${(props) => usernameColor[props.theme]};
`;

export const UserDetail = styled.div`
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.sm};
  color: ${(props) => userDetailColor[props.theme]};
`;

export const CreatedAt = styled.div`
  color: ${colors.gray500};
  font-size: ${fontSize.xs};
`;

export const Content = styled.div`
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.sm};
  color: ${(props) => contentColor[props.theme]};

  white-space: pre-line;
`;
