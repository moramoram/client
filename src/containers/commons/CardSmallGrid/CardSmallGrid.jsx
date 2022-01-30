import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { CardSmall } from "@/components";

const CardSmallGrid = ({ data, isLoading, ...props }) => {
  return (
    <Layout {...props}>
      {data.map(({ url, ...props }, idx) => {
        return (
          <CardItemLink to={url} key={idx}>
            <CardSmall isLoading={isLoading} {...props} />
          </CardItemLink>
        );
      })}
    </Layout>
  );
};

CardSmallGrid.propTypes = {
  list: PropTypes.arrayOf(Object),
};

export default CardSmallGrid;

const Layout = styled.div`
  display: flex;
  gap: 20px;

  width: 100%;
  overflow-x: scroll;
  margin: auto;
  align-items: center;
`;

const CardItemLink = styled(Link)`
  text-decoration: none;
`;
