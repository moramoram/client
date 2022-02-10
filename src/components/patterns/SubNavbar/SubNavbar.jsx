import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useSlider } from "@/hooks";

import { SubNavbarItem } from "./SubNavbarItem";
import { loadings } from "@/_shared";

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

const SubNavbar = ({ data, theme, onClick, selected = 1, ...props }) => {
  const [selectedIndex, setSelectedIndex] = useState(selected);
  const sliderRef = useRef(null);

  const handleNavItemClick = (idx) => {
    const current = sliderRef.current;
    const currentChildren = current.children[idx];

    const move =
      currentChildren.offsetLeft -
      current.clientWidth / 2 +
      currentChildren.clientWidth / 2;
    current.scrollLeft = move;

    setSelectedIndex(idx + 1);
    onClick(idx + 1);
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
            status={selectedIndex === idx + 1 ? "active" : "default"}
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
  border-radius: 8px;

  animation: ${(props) => props.isLoading && loadings[props.theme]};
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }

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
`;
