import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Card } from "@/components";

const CardGrid = ({ list, isLoading, ...props }) => {
  const cards = isLoading ? (
    <Card isLoading {...props} />
  ) : (
    list.map(({ url, ...props }, idx) => {
      return <Card {...props} />;
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
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 90px;
`;

const CardItemLink = styled(Link)`
  text-decoration: none;
`;
