import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { themeState } from "@/recoil/theme";

import { NavMobileItem } from "./NavMobileItem";
import { Avatar, Button, Switch } from "@/components";
import { Logo, Icon } from "@/foundations";
import { colors, fontSize, fontWeight, animations, shadows } from "@/_shared";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const TYPE = {
  DEFAULT: "default",
  TRANSPARENT: "transparent",
};

const NavMobile = ({ isLogin, navData, userMenuData, ...props }) => {
  const [current, setCurrent] = useState(null);
  const [navbarOpen, setnavbarOpen] = useState(false);
  const [theme, setTheme] = useRecoilState(themeState);
  const navbar = useRef();

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleClickItem = (name) => {
    name === current
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : window.scrollTo({ top: 0 });
    setCurrent(name);
    setnavbarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarOpen && !navbar?.current.contains(event.target)) {
        setnavbarOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [navbarOpen]);

  return (
    <Layout ref={navbar} {...props}>
      <Navbar {...props}>
        <Link to=".">
          <Logo width="80" height="20" {...props} />
        </Link>
        <Icon
          icon={navbarOpen ? "x" : "menu"}
          onClick={() => setnavbarOpen(!navbarOpen)}
          {...props}
        />
      </Navbar>
      {navbarOpen && (
        <NavDropdown {...props}>
          <LinkBox>
            {navData.map(({ name, title, url }, idx) => (
              <NavItemLink to={url} key={idx}>
                <NavMobileItem
                  {...props}
                  onClick={() => handleClickItem(name)}
                  status={current === name ? "active" : "default"}
                >
                  {title}
                </NavMobileItem>
              </NavItemLink>
            ))}
          </LinkBox>

          {isLogin ? (
            <>
              <UserInfoBox {...props}>
                <UserInfo {...props}>
                  <Avatar size="medium" />
                  <div>
                    <UserName>김싸피</UserName> (6기/서울)
                  </div>
                </UserInfo>
                <IconBox {...props}>
                  <SwitchBox>
                    <Switch
                      isSelected={theme !== "light"}
                      onToggle={handleTheme}
                    />
                  </SwitchBox>
                  <Icon
                    icon="bell"
                    stroke={colors.gray400}
                    width="20"
                    aria-hidden
                  />
                </IconBox>
              </UserInfoBox>
              <LinkBox>
                {userMenuData.map(({ name, title, url }, idx) => (
                  <UserMobileItem
                    {...props}
                    onClick={() => handleClickItem(name)}
                    status={current === name ? "active" : "default"}
                    key={idx}
                  >
                    {title}
                  </UserMobileItem>
                ))}
              </LinkBox>
            </>
          ) : (
            <ButtonBox>
              <Button mode="primary" width="100%" {...props}>
                회원가입
              </Button>
              <Button mode="secondary" width="100%" {...props}>
                로그인
              </Button>
            </ButtonBox>
          )}
        </NavDropdown>
      )}
    </Layout>
  );
};

NavMobile.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  type: PropTypes.oneOf(Object.values(TYPE)),
  isLogin: PropTypes.bool,
  isStatic: PropTypes.bool,
};

NavMobile.defaultProps = {
  theme: THEME.LIGHT,
  type: TYPE.DEFAULT,
  isLogin: true,
  isStatic: false,
};

export default NavMobile;

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

const Layout = styled.div`
  position: ${(props) => (props.isStatic ? "static" : "fixed")};
  width: 100%;
  z-index: 9999;
`;

const Navbar = styled.div`
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

const NavDropdown = styled.div`
  padding-bottom: 1rem;
  box-shadow: ${(props) => boxShadow[props.theme]};

  ${(props) =>
    props.type === TYPE.TRANSPARENT &&
    `
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(196, 196, 196, 0) 100%
      );
    `}

  background-color: ${(props) => dropdownBgColor[props.theme][props.type]};
  backdrop-filter: blur(10px);

  animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
  transition: 0.3s;
`;

const LinkBox = styled.div`
  padding: 1rem 0;

  :last-child {
    padding: 0 0 0.5rem 0;
  }
`;

const NavItemLink = styled(Link)`
  text-decoration: none;
`;

const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 18px 10% 15px 8%;
  border-top: 1px solid ${(props) => borderColor[props.theme][props.type]};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: ${fontSize.sm};
  color: ${(props) => textColor[props.theme][props.type]};
`;

const UserName = styled.span`
  font-weight: ${fontWeight.bold};
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const SwitchBox = styled.div`
  display: flex;
  align-items: center;
  width: 44px;
`;

const UserMobileItem = styled(NavMobileItem)`
  display: flex;
  align-items: center;
  font-size: ${fontSize.sm};
  height: 36px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 8%;
`;