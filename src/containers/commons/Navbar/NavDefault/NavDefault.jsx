import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { themeState } from "@/recoil/theme";
import { loginModalState } from "@/recoil/modal";

import { NavDefaultItem } from "./NavDefaultItem";
import { Avatar, Button, Dropdown, Switch } from "@/components";
import { Logo, Icon } from "@/foundations";
import { colors, animations } from "@/_shared";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const TYPE = {
  DEFAULT: "default",
  TRANSPARENT: "transparent",
};

const NavDefault = ({ isLogin, navData, ...props }) => {
  const [current, setCurrent] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [theme, setTheme] = useRecoilState(themeState);
  const setLoginModalOpen = useSetRecoilState(loginModalState);
  const navbarRight = useRef();

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const onClickNavItem = (name) => {
    name === current
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : window.scrollTo({ top: 0 });
    setCurrent(name);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !navbarRight?.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [dropdownOpen]);

  return (
    <Layout {...props}>
      <FlexBox>
        <Link to=".">
          <Logo width="80" height="20" {...props} />
        </Link>
        <NavbarItemBox>
          {navData.map(({ name, title, url }, idx) => (
            <NavItemLink to={url} key={idx}>
              <NavDefaultItem
                {...props}
                onClick={() => onClickNavItem(name)}
                status={current === name ? "active" : "default"}
              >
                {title}
              </NavDefaultItem>
            </NavItemLink>
          ))}
        </NavbarItemBox>
      </FlexBox>
      <FlexBox ref={navbarRight}>
        {isLogin ? (
          <>
            <SwitchBox>
              <Switch isSelected={theme !== "light"} onToggle={handleTheme} />
            </SwitchBox>
            <Icon icon="bell" stroke={colors.gray400} width="20" aria-hidden />
            <Avatar
              size="medium"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && <UserDropdown {...props} />}
          </>
        ) : (
          <ButtonBox>
            <Button
              mode="secondary"
              width="150px"
              onClick={() => setLoginModalOpen(true)}
              {...props}
            >
              로그인
            </Button>
            <Button
              mode="primary"
              width="150px"
              onClick={() => setLoginModalOpen(true)}
              {...props}
            >
              회원가입
            </Button>
          </ButtonBox>
        )}
      </FlexBox>
    </Layout>
  );
};

NavDefault.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  type: PropTypes.oneOf(Object.values(TYPE)),
  isLogin: PropTypes.bool,
  isStatic: PropTypes.bool,
  navData: PropTypes.array,
};

NavDefault.defaultProps = {
  theme: THEME.LIGHT,
  type: TYPE.DEFAULT,
  isLogin: true,
  isStatic: false,
};

export default NavDefault;

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
    transparent: colors.gray700,
  },
  light: {
    default: colors.gray200,
    transparent: colors.gray700,
  },
};

const Layout = styled.div`
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

const FlexBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  position: relative;

  :first-child {
    padding-left: 8%;
  }

  :last-child {
    padding-right: 10%;
  }

  svg,
  div {
    cursor: pointer;
  }
`;

const NavbarItemBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

const NavItemLink = styled(Link)`
  text-decoration: none;
`;

const SwitchBox = styled.div`
  display: flex;
  align-items: center;
  width: 44px;
`;

const UserDropdown = styled(Dropdown)`
  z-index: 9999;
  top: 36px;
  right: 20px;
  animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;
