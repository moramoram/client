import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import {
  Layout,
  Navbar,
  NavDropdown,
  LinkBox,
  NavItemLink,
  UserInfoBox,
  UserInfo,
  UserName,
  IconBox,
  SwitchBox,
  UserMobileItemLink,
  UserMobileItem,
  ButtonBox,
} from "./NavMobile.styled";
import { NavMobileItem } from "./NavMobileItem";
import { Avatar, Button, Switch } from "@/components";
import { Logo, Icon } from "@/foundations";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const TYPE = {
  DEFAULT: "default",
  TRANSPARENT: "transparent",
};

const NavMobile = ({ isLogin, navData, userMenuData, ...props }) => {
  const [navbarOpen, setnavbarOpen] = useState(false);
  const navbar = useRef();
  const [current, setCurrent] = useState(null);

  const onNavItem = (name) => {
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
    <Layout blur={navbarOpen} ref={navbar} {...props}>
      <Navbar {...props}>
        <Link to="main">
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
            <>
              <UserInfoBox {...props}>
                <UserInfo {...props}>
                  <Avatar size="medium" />
                  <div>
                    <UserName>User</UserName>님 안녕하세요!
                  </div>
                </UserInfo>
                <IconBox {...props}>
                  <SwitchBox>
                    <Switch size="small" onToggle={() => {}} />
                  </SwitchBox>
                  <Icon icon="bell" width="20" aria-hidden />
                </IconBox>
              </UserInfoBox>
              <LinkBox>
                {userMenuData.map(({ name, title, url }, idx) => (
                  <UserMobileItemLink to={url} key={idx}>
                    <UserMobileItem
                      {...props}
                      onClick={() => onNavItem(name)}
                      status={current === name ? "active" : "default"}
                    >
                      {title}
                    </UserMobileItem>
                  </UserMobileItemLink>
                ))}
                <UserMobileItem {...props}>로그아웃</UserMobileItem>
              </LinkBox>
            </>
          ) : (
            <ButtonBox>
              <Button mode="primary" width="100%" {...props}>
                회원가입
              </Button>
              <Button
                mode={
                  props.type === TYPE.TRANSPARENT ? "transparent" : "secondary"
                }
                width="100%"
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
