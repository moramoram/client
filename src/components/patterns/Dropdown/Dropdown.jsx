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
      <UserInfo {...props}>
        <UserName>{authState.nickname ?? "User"}</UserName>님 안녕하세요!
      </UserInfo>
      {items.map((item) => (
        <MenuBox {...props}>
          <DropdownItemLink to={item.url} {...props}>
            <DropdownItem children={item.title} key={item.name} {...props} />
          </DropdownItemLink>
        </MenuBox>
      ))}
    </Layout>
  );
};

Dropdown.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  items: PropTypes.array.isRequired,
  user: PropTypes.node.isRequired,
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
      name: "settings",
      title: "정보수정",
      url: "settings",
    },
    {
      name: "logout",
      title: "로그아웃",
      url: "logout",
    },
  ],
  user: "User",
};

export default Dropdown;

const borderColor = {
  dark: colors.gray800,
  light: colors.gray100,
};

const bgColor = {
  dark: colors.black,
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
`;

const UserInfo = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};

  font-size: ${fontSize.sm};
  color: ${(props) => textColor[props.theme]};
`;

const UserName = styled.span`
  font-weight: ${fontWeight.bold};
`;

const MenuBox = styled.div`
  :nth-child(2) {
    padding-top: 4px;
  }

  :nth-child(3) {
    padding-bottom: 4px;
  }
`;

const DropdownItemLink = styled(Link)`
  text-decoration: none;
`;
