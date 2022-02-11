import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import { auth, token, themeState, loginModalState } from "@/recoil";

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

const NavDefault = ({ isLogin, navData, userMenuData, ...props }) => {
  const [current, setCurrent] = useState();

  const [theme, setTheme] = useRecoilState(themeState);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const setLoginModalOpen = useSetRecoilState(loginModalState);
  const resetToken = useResetRecoilState(token);
  const resetAuth = useResetRecoilState(auth);

  const { pathname } = useLocation();
  const navbarRight = useRef();

  const onToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const onNavItem = (name) => {
    name === current
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : window.scrollTo({ top: 0 });
    setCurrent(name);
  };

  const onLogout = () => {
    resetToken();
    resetAuth();
  };

  useEffect(() => {
    setCurrent(pathname.split("/")[1]);
    const handleClickOutside = (event) => {
      if (dropdownOpen && !navbarRight?.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [pathname, dropdownOpen]);

  return (
    <Layout {...props}>
      <FlexBox>
        <Link to="main">
          <Logo width="80" height="20" {...props} />
        </Link>
        <NavbarItemBox>
          {navData.map(({ name, title, url }) => (
            <NavItemLink to={url} key={name}>
              <NavDefaultItem
                {...props}
                onClick={() => onNavItem(name)}
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
              <Switch
                isSelected={theme !== "light"}
                onToggle={onToggle}
                size="small"
              />
            </SwitchBox>
            <Icon icon="bell" stroke={colors.gray400} width="20" aria-hidden />
            <Avatar
              size="medium"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              // TODO : 프로필에서 Username 가져오기
              <UserDropdown
                items={userMenuData}
                onClick={onLogout}
                {...props}
              />
            )}
          </>
        ) : (
          <ButtonBox>
            <Button
              mode={
                props.type === TYPE.TRANSPARENT ? "transparent" : "secondary"
              }
              width="150px"
              onClick={() => setLoginModalOpen("login")}
              {...props}
            >
              로그인
            </Button>
            <Button
              mode="primary"
              width="150px"
              onClick={() => setLoginModalOpen("signup")}
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
  navData: PropTypes.array,
};

NavDefault.defaultProps = {
  theme: THEME.LIGHT,
  type: TYPE.DEFAULT,
  isLogin: true,
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
    transparent: colors.gray800,
  },
  light: {
    default: colors.gray200,
    transparent: colors.gray800,
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
  width: 36px;
`;

const UserDropdown = styled(Dropdown)`
  z-index: 9999;
  top: 40px;
  right: 8%;
  animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;