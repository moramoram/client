import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useSlider } from "@/hooks";

import { SubNavbarItem } from "./SubNavbarItem";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const STATUS = {
  DEFAULT: "default",
  ACTIVE: "active",
};

const VIEW = {
  DEFAULT: "default",
  MOBILE: "mobile",
};

const SubNavbar = ({ data, theme, onClick, ...props }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleNavItemClick = (idx) => {
    const current = sliderRef.current;
    const currentChildren = current.children[idx];

    const move =
      currentChildren.offsetLeft -
      current.clientWidth / 2 +
      currentChildren.clientWidth / 2;
    current.scrollLeft = move;

    setSelectedIndex(idx);
    onClick(idx);
  };

  useSlider(sliderRef);

  return (
    <Layout theme={theme} ref={sliderRef} {...props}>
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
  view: PropTypes.oneOf(Object.values(VIEW)),
  onClick: PropTypes.func,
};

SubNavbar.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
  view: VIEW.DEFAULT,
  onClick: undefined,
};

export default SubNavbar;

const Layout = styled.div`
  display: flex;
  overflow-x: scroll;

  ${(props) =>
    props.view === VIEW.DEFAULT &&
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
