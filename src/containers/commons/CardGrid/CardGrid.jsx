import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Card } from "@/components";

const CardGrid = ({ list, isLoading, ...props }) => {
  const cards = isLoading ? (
    <Card isLoading {...props} />
  ) : (
    list.map(({ url, ...props }, idx) => {
      return (
        <CardItemLink to={url} key={idx}>
          <Card {...props} />
        </CardItemLink>
      );
    })
  );

  return <Layout {...props}>{cards}</Layout>;
};

CardGrid.propTypes = {
  list: PropTypes.arrayOf(Object),
};

export default CardGrid;

const Layout = styled.div`
  display: flex;
  max-width: 940px;
  justify-content: center;

  gap: 20px;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 90px;
`;

const CardItemLink = styled(Link)`
  text-decoration: none;
`;
