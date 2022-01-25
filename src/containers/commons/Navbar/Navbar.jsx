import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { NavItem } from "./NavItem";
import { Avatar } from "@/components";
import { Logo, Icon } from "@/foundations";
import { colors } from "@/_shared";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
  TRANSPARENT: "transparent",
};

const Navbar = ({ ...props }) => {
  const [current, setCurrent] = useState(null);

  return (
    <Layout {...props}>
      <FlexBox>
        <Link to=".">
          <Logo width="100" height="26" {...props} />
        </Link>

        <NavbarItemBox>
          {navData.map(({ name, title, url }, idx) => {
            return (
              <NavItemLink to={url} key={idx}>
                <NavItem
                  {...props}
                  onClick={() => setCurrent(name)}
                  status={current === name ? "active" : "default"}
                >
                  {title}
                </NavItem>
              </NavItemLink>
            );
          })}
        </NavbarItemBox>
      </FlexBox>
      <FlexBox>
        <Icon icon="bell" stroke={colors.gray400} aria-hidden />
        <Avatar />
      </FlexBox>
    </Layout>
  );
};

Navbar.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
};

Navbar.defaultProps = {
  theme: THEME.LIGHT,
};

export default Navbar;

const navData = [
  {
    name: "community",
    title: "커뮤니티",
    url: "community",
  },
  {
    name: "study",
    title: "스터디",
    url: "study",
  },
  {
    name: "jobs",
    title: "취업정보",
    url: "job",
  },
];

const bgColor = {
  dark: colors.black,
  light: colors.white,
  transparent: "#00000000",
};

const borderColor = {
  dark: colors.gray700,
  light: colors.gray200,
  transparent: colors.gray700,
};

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 90px;

  background-color: ${(props) => bgColor[props.theme]};
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};
`;

const FlexBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  svg,
  div {
    cursor: pointer;
  }
`;

const NavbarItemBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3rem;
`;

const NavItemLink = styled(Link)`
  text-decoration: none;
`;
