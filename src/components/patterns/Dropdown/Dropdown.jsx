import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { DropdownItem } from "./DropdownItem";
import { colors, fontSize, fontWeight, shadows } from "@/_shared";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const Dropdown = ({ user, items, ...props }) => {
  return (
    <Layout {...props}>
      <UserInfo {...props}>
        <UserName>{user}</UserName>님 안녕하세요!
      </UserInfo>
      <MenuBox {...props}>
        {items.map((item) => (
          <DropdownItem children={item} key={item} {...props} />
        ))}
      </MenuBox>
      <MenuBox {...props}>
        <DropdownItem children="로그아웃" {...props} />
      </MenuBox>
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
  items: ["내 프로필", "정보 수정"],
  user: "User",
};

export default Dropdown;

const borderColor = {
  dark: colors.gray600,
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
  padding: 4px 0;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};

  :last-child {
    border: none;
  }
`;
