import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Layout,
  FlexBox,
  NavbarItemBox,
  NavItemLink,
  SwitchBox,
  UserDropdown,
  ButtonBox,
} from "./NavDefault.styled";
import { NavDefaultItem } from "./NavDefaultItem";
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

const NavDefault = ({ isLogin, navData, userMenuData, ...props }) => {
  const [current, setCurrent] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const onNavItem = (name) => {
    setCurrent(name);
  };

  return (
    <Layout {...props}>
      <FlexBox>
        <Logo width="80" height="20" {...props} />

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
      <FlexBox>
        {isLogin ? (
          <>
            <SwitchBox>
              <Switch size="small" onToggle={() => {}} />
            </SwitchBox>
            <Icon icon="bell" stroke={colors.gray400} width="20" aria-hidden />
            <Avatar
              size="medium"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && <UserDropdown items={userMenuData} {...props} />}
          </>
        ) : (
          <ButtonBox>
            <Button
              mode={
                props.type === TYPE.TRANSPARENT ? "transparent" : "secondary"
              }
              width="150px"
              {...props}
            >
              로그인
            </Button>
            <Button mode="primary" width="150px" {...props}>
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
