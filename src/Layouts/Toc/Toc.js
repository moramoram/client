import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import TocItem from "../../Components/TocItem/TocItem";
import { color } from "../../shared/styles";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

export const Toc = ({ items, ...props }) => {
  const [current, setCurrent] = useState("info");

  return (
    <Layout {...props}>
      {items.map(({ name, title, number }, index) => {
        return (
          <TocItem
            onClick={() => setCurrent(name)}
            status={current === name ? "active" : "default"}
            number={number}
            key={index}
            {...props}
          >
            {title}
          </TocItem>
        );
      })}
    </Layout>
  );
};

Toc.propTypes = {
  items: PropTypes.array.isRequired,
  theme: PropTypes.oneOf(Object.values(THEME)),
};

Toc.defaultProps = {
  theme: THEME.LIGHT,
  items: [
    {
      name: "info",
      title: "공고",
      number: null,
    },
    {
      name: "study",
      title: "스터디",
      number: 5,
    },
    {
      name: "comments",
      title: "댓글",
      number: 20,
    },
  ],
};

const borderColor = {
  dark: color.gray700,
  light: color.gray200,
};

const Layout = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};
`;
