import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, typography } from "../shared/styles";

import { SubNavbarItem } from "./SubNavbarItem";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const STATUS = {
  DEFAULT: "default",
  ACTIVE: "active",
};

const SubNavbarWrapper = styled.button`
  width: auto;
  height: auto;
  border: 0;
  margin: 0;
  background: transparent;
  svg {
    height: "16";
    width: "16";
    margin-right: "6";
    margin-top: "-2";
    margin-bottom: "-2";
    vertical-align: top;
  }
`;

export function SubNavbar({ items, theme, onClick, ...props }) {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleNavItemClick = (e, idx) => {
    setSelectedIndex(idx);
    onClick();
  };

  return (
    <SubNavbarWrapper theme={theme} {...props}>
      {items.map(({ id, title }) => {
        return (
          <SubNavbarItem
            theme={theme}
            onClick={(e) => handleNavItemClick(e, id)}
            key={id}
            status={selectedIndex === id ? "active" : "default"}
          >
            {title}
          </SubNavbarItem>
        );
      })}
    </SubNavbarWrapper>
  );
}

SubNavbarWrapper.propTypes = {
  items: PropTypes.array.isRequired,
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
};

SubNavbarWrapper.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
  containsIcon: false,
  items: [
    {
      id: 1,
      title: "커뮤니티",
    },
    {
      id: 2,
      title: "스터디",
    },
    {
      id: 3,
      title: "취업정보",
    },
  ],
};
