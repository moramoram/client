import React, { useState, useEffect, useRef, Suspense } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import { auth, token, themeState, loginModalState } from "@/recoil";

import { NavMobileItem } from "./NavMobileItem";
import { Notification } from "@/containers";
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

const NavMobile = ({ isLogin, userData, navData, userMenuData, ...props }) => {
  const navigate = useNavigate();
  const [navbarOpen, setnavbarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [theme, setTheme] = useRecoilState(themeState);
  const setLoginModalOpen = useSetRecoilState(loginModalState);
  const resetToken = useResetRecoilState(token);
  const resetAuth = useResetRecoilState(auth);

  const navbar = useRef();
  const { pathname } = useLocation();
  const [current, setCurrent] = useState(pathname.split("/")[1]);

  const onToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const onNavItem = (name) => {
    name === current
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : window.scrollTo({ top: 0 });
    setCurrent(name);
    setnavbarOpen(false);
  };

  useEffect(() => {
    setCurrent(pathname.split("/")[1]);
    const handleClickOutside = (event) => {
      if (navbarOpen && !navbar?.current.contains(event.target)) {
        setnavbarOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [navbarOpen, pathname]);

  const onLogout = () => {
    resetToken();
    resetAuth();
  };

  const navTitle = {
    community: "커뮤니티",
    study: "스터디",
    job: "취업정보",
    mypage: "내 프로필",
  };

  return (
    <Layout blur={navbarOpen} ref={navbar} {...props}>
      <Navbar {...props}>
        {!pathname.split("/")[2] || navbarOpen ? (
          <LogoBox
            onClick={() => {
              navigate("/main");
              setnavbarOpen(false);
            }}
          >
            <Logo width="80" height="20" {...props} />
          </LogoBox>
        ) : (
          <>
            <LogoBox>
              <Icon icon="arrowLeft" onClick={() => navigate(-1)} {...props} />
            </LogoBox>
            <NavTitle {...props}>{navTitle[current]}</NavTitle>
          </>
        )}
        <Icon
          icon={navbarOpen ? "x" : "menu"}
          onClick={() => setnavbarOpen(!navbarOpen)}
          {...props}
        />
      </Navbar>
      {navbarOpen && (
        <NavDropdown {...props}>
          <LinkBox>
            {navData.map(({ name, title, url }) => (
              <NavItemLink to={url} key={name}>
                <NavMobileItem
                  {...props}
                  onClick={() => onNavItem(name)}
                  status={current === name ? "active" : "default"}
                >
                  {title}
                </NavMobileItem>
              </NavItemLink>
            ))}
          </LinkBox>

          {isLogin ? (
            <UserInfoBox {...props}>
              <div>
                <UserInfo {...props}>
                  <Avatar
                    username={userData.nickname}
                    src={userData.profileImg}
                    size="medium"
                  />
                  <div>
                    <UserName>{userData?.nickname ?? "User"}</UserName>님
                    안녕하세요!
                  </div>
                </UserInfo>
                <LinkBox>
                  {userMenuData.map(({ name, title, url }, idx) => (
                    <UserMobileItemLink to={url} key={idx}>
                      <UserMobileItem
                        {...props}
                        onClick={() => onNavItem(name)}
                        status={current === name ? "active" : "default"}
                        itemFor="user"
                      >
                        {title}
                      </UserMobileItem>
                    </UserMobileItemLink>
                  ))}
                  <UserMobileItem {...props} onClick={onLogout}>
                    로그아웃
                  </UserMobileItem>
                </LinkBox>
              </div>
              <IconBox {...props}>
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
                    {...props}
                  />
                </Suspense>
              </IconBox>
            </UserInfoBox>
          ) : (
            <ButtonBox>
              <Button
                mode="primary"
                width="100%"
                onClick={() => setLoginModalOpen(true)}
                {...props}
              >
                회원가입
              </Button>
              <Button
                mode={
                  props.type === TYPE.TRANSPARENT ? "transparent" : "secondary"
                }
                width="100%"
                onClick={() => setLoginModalOpen(true)}
                {...props}
              >
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
};

NavMobile.defaultProps = {
  theme: THEME.LIGHT,
  type: TYPE.DEFAULT,
  isLogin: true,
};

export default NavMobile;

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

const Layout = styled.div`
  position: ${(props) => (props.isStatic ? "static" : "fixed")};
  width: 100%;
  z-index: 9999;

  ${(props) =>
    props.type === TYPE.TRANSPARENT &&
    `
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

const LogoBox = styled.div`
  cursor: pointer;
`;

const NavTitle = styled.div`
  color: ${(props) => textColor[props.theme][props.type]};
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.bold};
`;

const NavDropdown = styled.div`
  padding-bottom: 1rem;
  box-shadow: ${(props) => boxShadow[props.theme]};
  background-color: ${(props) => dropdownBgColor[props.theme][props.type]};

  animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
  transition: background-color 0.3s;
`;

const LinkBox = styled.div`
  padding: 1rem 0 0.5rem 0;
`;

const NavItemLink = styled(Link)`
  text-decoration: none;
`;

const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 18px 10% 8px 8%;
  border-top: 1px solid rgba(134, 142, 150, 0.2);
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

const UserMobileItemLink = styled(Link)`
  text-decoration: none;
`;

const UserMobileItem = styled(NavMobileItem)`
  display: flex;
  align-items: center;
  font-size: ${fontSize.sm};
  padding: 0;
  height: 36px;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  height: 28px;
`;

const SwitchBox = styled.div`
  display: flex;
  align-items: center;
  width: 36px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 8%;
`;
