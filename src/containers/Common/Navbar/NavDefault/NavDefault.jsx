import React, { useState, useEffect, useRef, Suspense } from "react";
import PropTypes from "prop-types";

import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import { token, themeState, loginModalState } from "@/recoil";

import {
  Layout,
  FlexBox,
  LogoBox,
  NavbarItemBox,
  NavItemLink,
  SwitchBox,
  UserDropdown,
  ButtonBox,
} from "./NavDefault.styled";
import { NavDefaultItem } from "./NavDefaultItem";
import { Notification } from "@/containers/Common";
import { Avatar, Button, Switch } from "@/components";
import { Icon, Logo } from "@/foundations";
import { colors } from "@/_shared";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const TYPE = {
  DEFAULT: "default",
  TRANSPARENT: "transparent",
};

const NavDefault = ({ isLogin, userData, navData, userMenuData, ...props }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState();
  const [theme, setTheme] = useRecoilState(themeState);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const setLoginModalOpen = useSetRecoilState(loginModalState);
  const resetToken = useResetRecoilState(token);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationOpen && !navbarRight?.current.contains(event.target)) {
        setNotificationOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [notificationOpen]);

  return (
    <Layout {...props}>
      <FlexBox>
        <LogoBox
          onClick={() => {
            navigate("/main");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Logo width="80" height="20" {...props} />
        </LogoBox>
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
            <Suspense
              fallback={
                <Icon
                  icon="bell"
                  stroke={colors.gray400}
                  width="20"
                  aria-hidden
                />
              }
            >
              <Notification
                notificationOpen={notificationOpen}
                setNotificationOpen={setNotificationOpen}
                setDropdownOpen={setDropdownOpen}
                {...props}
              />
            </Suspense>
            <Avatar
              size="medium"
              username={userData?.nickname}
              src={userData?.profileImg}
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
                setNotificationOpen(false);
              }}
            />
            {dropdownOpen && (
              <UserDropdown
                items={userMenuData}
                userData={userData}
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
