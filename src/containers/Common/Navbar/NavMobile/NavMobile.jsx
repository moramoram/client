import React, { useState, useEffect, useRef, Suspense } from "react";
import PropTypes from "prop-types";

import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import { token, themeState, loginModalState } from "@/recoil";

import {
  Layout,
  Navbar,
  LogoBox,
  NavTitle,
  NavDropdown,
  LinkBox,
  NavItemLink,
  UserInfoBox,
  UserInfo,
  UserName,
  UserMobileItemLink,
  UserMobileItem,
  IconBox,
  SwitchBox,
  ButtonBox,
} from "./NavMobile.styled";
import { NavMobileItem } from "./NavMobileItem";
import { Notification } from "@/containers/Common";
import { Avatar, Button, Switch } from "@/components";
import { Logo, Icon } from "@/foundations";
import { colors } from "@/_shared";

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
              window.scrollTo({ top: 0, behavior: "smooth" });
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
                    username={userData?.nickname}
                    src={userData?.profileImg}
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
