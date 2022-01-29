import React, { useState, useRef } from "react";
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

const TYPE = {
  DEFAULT: "default",
  MOBILE: "mobile",
};

const SubNavbar = ({ data, theme, onClick, ...props }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleNavItemClick = (idx) => {
    setSelectedIndex(idx);
    onClick(idx);
    const current = scrollRef.current;
    const currentChileren = current.children[idx];

    const move =
      currentChileren.offsetLeft -
      current.clientWidth / 2 +
      currentChileren.clientWidth / 2;
    current.scrollLeft = move;
  };

  return (
    <Layout theme={theme} ref={scrollRef} {...props}>
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
    </Layout>
  );
};

SubNavbar.propTypes = {
  data: PropTypes.array.isRequired,
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
  type: PropTypes.oneOf(Object.values(TYPE)),
  onClick: PropTypes.func,
};

SubNavbar.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
  type: STATUS.DEFAULT,
  onClick: undefined,
};

export default SubNavbar;

const Layout = styled.div`
  display: flex;
  overflow-x: scroll;

  ${(props) =>
    props.type === TYPE.DEFAULT &&
    `
      flex-direction: column;
      align-items: stretch;
      width: 200px;
  `}

  > div {
    flex-shrink: 0;
  }
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;
