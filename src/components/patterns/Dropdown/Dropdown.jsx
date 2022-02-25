import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { DropdownItem } from "./DropdownItem";
import { Layout, UserInfo, UserName, MenuBox } from "./Dropdown.styled";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const Dropdown = ({ items, userData, onClick, ...props }) => {
  return (
    <Layout {...props}>
      <UserInfo {...props}>
        <UserName>{userData?.nickname ?? "User"}</UserName>님 안녕하세요!
      </UserInfo>
      <MenuBox {...props}>
        <Link to="mypage" {...props}>
          <DropdownItem children="내 프로필" {...props} />
        </Link>
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
