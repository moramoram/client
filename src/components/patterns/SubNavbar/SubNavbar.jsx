import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { SubNavbarItem } from "./SubNavbarItem";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const STATUS = {
  DEFAULT: "default",
  ACTIVE: "active",
};

const SubNavbar = ({ data, theme, onClick, ...props }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNavItemClick = (idx) => {
    setSelectedIndex(idx);
    onClick(idx);
  };

  return (
    <SubNavbarWrapper theme={theme} {...props}>
      {data.map(({ id, title }, idx) => {
        return (
          <SubNavbarItem
            theme={theme}
            onClick={() => handleNavItemClick(idx)}
            key={idx}
            status={selectedIndex === id ? "active" : "default"}
          >
            {title}
          </SubNavbarItem>
        );
      })}
    </SubNavbarWrapper>
  );
};

SubNavbar.propTypes = {
  data: PropTypes.array.isRequired,
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
};

SubNavbar.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
};

export default SubNavbar;

const SubNavbarWrapper = styled.div`
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
