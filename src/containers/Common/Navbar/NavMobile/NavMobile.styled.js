import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { NavMobileItem } from "./NavMobileItem";
import { colors, fontSize, fontWeight, animations, shadows } from "@/_shared";

const borderColor = {
  dark: {
    default: colors.gray700,
    transparent: colors.gray800,
  },
  light: {
    default: colors.gray200,
    transparent: colors.gray800,
  },
};

const bgColor = {
  dark: {
    default: colors.black,
    transparent: "#00000000",
  },
  light: {
    default: colors.white,
    transparent: "#00000000",
  },
};

const dropdownBgColor = {
  dark: {
    default: colors.black,
    transparent: "rgba(0, 0, 0, 0.5)",
  },
  light: {
    default: colors.white,
    transparent: "rgba(0, 0, 0, 0.185)",
  },
};

const textColor = {
  dark: {
    default: colors.gray25,
    transparent: colors.gray25,
  },
  light: {
    default: colors.gray900,
    transparent: colors.gray25,
  },
};

const boxShadow = {
  dark: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  light: shadows.base,
};

export const Layout = styled.nav`
  position: ${(props) => (props.isStatic ? "static" : "fixed")};
  width: 100%;
  z-index: 9999;

  ${(props) =>
    props.type === "transparent" &&
    css`
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(196, 196, 196, 0) 100%
      );
    `}

  ${(props) =>
    props.blur &&
    css`
      backdrop-filter: blur(10px);
    `}
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 8%;
  height: 65px;
  border-bottom: 1px solid ${(props) => borderColor[props.theme][props.type]};
  background-color: ${(props) => bgColor[props.theme][props.type]};

  color: ${colors.gray500};
  transition: 0.3s;
`;

export const LogoBox = styled.div`
  cursor: pointer;
`;

export const NavTitle = styled.div`
  color: ${(props) => textColor[props.theme][props.type]};
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.bold};
`;

export const NavDropdown = styled.div`
  padding-bottom: 1rem;
  box-shadow: ${(props) => boxShadow[props.theme]};
  background-color: ${(props) => dropdownBgColor[props.theme][props.type]};

  animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
  transition: background-color 0.3s;
`;

export const LinkBox = styled.div`
  padding: 1rem 0 0.5rem 0;
`;

export const NavItemLink = styled(Link)`
  text-decoration: none;
`;

export const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 18px 10% 8px 8%;
  border-top: 1px solid rgba(134, 142, 150, 0.2);
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: ${fontSize.sm};
  color: ${(props) => textColor[props.theme][props.type]};
`;

export const UserName = styled.span`
  font-weight: ${fontWeight.bold};
`;

export const UserMobileItemLink = styled(Link)`
  text-decoration: none;
`;

export const UserMobileItem = styled(NavMobileItem)`
  display: flex;
  align-items: center;
  font-size: ${fontSize.sm};
  padding: 0;
  height: 36px;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  height: 28px;
`;

export const SwitchBox = styled.div`
  display: flex;
  align-items: center;
  width: 36px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 8%;
`;
