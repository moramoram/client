import styled from "styled-components";
import { Link } from "react-router-dom";
import { Dropdown } from "@/components";
import { colors, animations } from "@/_shared";

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

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: ${(props) => (props.isStatic ? "static" : "fixed")};
  z-index: 9999;

  width: 100%;
  border-bottom: 1px solid ${(props) => borderColor[props.theme][props.type]};
  background-color: ${(props) => bgColor[props.theme][props.type]};

  transition: 0.5s;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  position: relative;

  :first-child {
    margin-left: 8%;
  }

  :last-child {
    margin-right: 10%;
  }

  svg,
  div {
    cursor: pointer;
  }
`;

export const LogoBox = styled.div`
  cursor: pointer;
`;

export const NavbarItemBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

export const NavItemLink = styled(Link)`
  text-decoration: none;
`;

export const SwitchBox = styled.div`
  display: flex;
  align-items: center;
  width: 36px;
`;

export const UserDropdown = styled(Dropdown)`
  z-index: 9999;
  top: 40px;
  right: 8%;
  animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;
