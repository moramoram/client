import React, { useState } from "react";
import PropTypes from "prop-types";

import { Layout } from "./TocNav.styled";
import { TocItem } from "../TocItem";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const TocNav = ({ items, ...props }) => {
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

TocNav.propTypes = {
  items: PropTypes.array.isRequired,
  theme: PropTypes.oneOf(Object.values(THEME)),
};

TocNav.defaultProps = {
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

export default TocNav;
