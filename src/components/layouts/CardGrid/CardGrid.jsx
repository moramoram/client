import React from "react";
import PropTypes from "prop-types";

import { Layout, CardItemLink } from "./CardGrid.styled";
import { CardResponsive } from "@/components";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const CardGrid = ({ data, theme, isLoading, ...props }) => {
  const items = isLoading ? cardData : data;
  return (
    <Layout {...props}>
      {items.map(({ id, ...props }) => (
        <CardItemLink to={id} key={id}>
          <CardResponsive theme={theme} isLoading={isLoading} {...props} />
        </CardItemLink>
      ))}
    </Layout>
  );
};

CardGrid.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

CardGrid.defaultProps = {
  theme: THEME.LIGHT,
};

const cardData = new Array(3).fill({
  contents: {
    title: "",
    subtitle: "",
    highlight: "",
    src: "",
  },
  badges: ["", "", ""],
  id: "",
});

export default CardGrid;
