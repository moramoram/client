import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Card } from "@/components";

const CardGrid = ({ data, isLoading, theme, ...props }) => {
  const cards = isLoading ? (
    <Card isLoading {...props} />
  ) : (
    data.map(({ url, ...props }, idx) => {
      return (
        <CardItemLink to={url} key={idx}>
          <Card {...props} theme={theme} />
        </CardItemLink>
      );
    })
  );

  return <Layout {...props}>{cards}</Layout>;
};

CardGrid.propTypes = {
  data: PropTypes.arrayOf(Object),
};

export default CardGrid;

const Layout = styled.div`
  display: flex;
  max-width: 940px;

  gap: 20px;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 90px;
`;

const CardItemLink = styled(Link)`
  text-decoration: none;
`;
