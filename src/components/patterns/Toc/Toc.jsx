import React, { useState } from "react";
import PropTypes from "prop-types";

import { Layout } from "./Toc.styled";
import { TocItem } from "./TocItem";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const Toc = ({ items, ...props }) => {
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
};

export default Toc;
