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

const Dropdown = ({ items, onClick, ...props }) => {
  const authState = useRecoilValue(auth);

  return (
    <Layout {...props}>
      <UserInfo {...props}>
        <UserName>{authState.nickname ?? "User"}</UserName>님 안녕하세요!
      </UserInfo>
      <MenuBox {...props}>
        <DropdownItemLink to="mypage" {...props}>
          <DropdownItem children="내 프로필" {...props} />
        </DropdownItemLink>
        <DropdownItem children="로그아웃" onClick={onClick} {...props} />
      </MenuBox>
    </Layout>
  );
};

Dropdown.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  items: PropTypes.array.isRequired,
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
`;
