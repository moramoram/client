import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { CardResponsive } from "@/components";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const CardGrid = ({ data, theme, isLoading, ...props }) => (
  <Layout {...props}>
    {data.map(({ id, ...props }, idx) => (
      <CardItemLink to={id} key={idx}>
        <CardResponsive theme={theme} isLoading={isLoading} {...props} />
      </CardItemLink>
    ))}
  </Layout>
);

CardGrid.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

CardResponsive.defaultProps = {
  theme: THEME.LIGHT,
};

export default CardGrid;

const Layout = styled.div`
  display: grid;
  width: 100%;
  max-width: 940px;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  gap: 20px;
`;

const CardItemLink = styled(Link)`
  text-decoration: none;
`;
