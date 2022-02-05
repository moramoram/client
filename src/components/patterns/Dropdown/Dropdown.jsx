import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { auth } from "@/recoil/auth";

import { DropdownItem } from "./DropdownItem";
import { colors, fontSize, fontWeight, shadows } from "@/_shared";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const Dropdown = ({ user, items, ...props }) => {
  const authState = useRecoilValue(auth);

  return (
    <Layout {...props}>
      {user && (
        <UserInfo {...props}>
          <UserName>{authState.nickname ?? "User"}</UserName>님 안녕하세요!
        </UserInfo>
      )}
      <MenuBox {...props}>
        {items.map((item) => (
          <DropdownItemLink to={item.url} key={item.name} {...props}>
            <DropdownItem children={item.title} {...props} />
          </DropdownItemLink>
        ))}
      </MenuBox>
    </Layout>
  );
};

Dropdown.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  items: PropTypes.array.isRequired,
  user: PropTypes.node,
};

Dropdown.defaultProps = {
  theme: THEME.LIGHT,
  items: [
    {
      name: "mypage",
      title: "내 프로필",
      url: "mypage",
    },
    {
      name: "logout",
      title: "로그아웃",
      url: "logout",
    },
  ],
  user: "",
};

export default Dropdown;

const borderColor = {
  dark: colors.gray800,
  light: colors.gray100,
};

const bgColor = {
  dark: colors.gray900,
  light: colors.white,
};

const textColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  width: 224px;
  border-radius: 8px;
  border: 1px solid ${(props) => borderColor[props.theme]};

  background-color: ${(props) => bgColor[props.theme]};
  box-shadow: ${shadows.base};

  ${(props) =>
    props.size === "small" &&
    `
      width: 100px;
      align-items: stretch;
    `}
`;

const UserInfo = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};

  font-size: ${fontSize.sm};
  color: ${(props) => textColor[props.theme]};

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const UserName = styled.span`
  font-weight: ${fontWeight.bold};
`;

const MenuBox = styled.div`
  padding: 4px 0;
`;

const DropdownItemLink = styled(Link)`
  text-decoration: none;

  ${(props) =>
    props.size === "small" &&
    `
      div {
        justify-content: center;
      };
    `}
`;
