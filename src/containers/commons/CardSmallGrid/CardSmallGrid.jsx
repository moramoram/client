import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { CardSmall } from "@/components";

const CardSmallGrid = ({ theme, data, isLoading, ...props }) => {
  const cards = isLoading ? (
    <CardSmall theme={theme} isLoading {...props} />
  ) : (
    data.map(({ url, ...props }, idx) => {
      return (
        <CardItemLink to={url} key={idx}>
          <CardSmall theme={theme} {...props} />
        </CardItemLink>
      );
    })
  );

  return <Layout {...props}>{cards}</Layout>;
};

CardSmallGrid.propTypes = {
  list: PropTypes.arrayOf(Object),
};

export default CardSmallGrid;

const Layout = styled.div`
  display: flex;
  gap: 20px;
  margin: auto;
  align-items: center;
`;

const CardItemLink = styled(Link)`
  text-decoration: none;
`;
