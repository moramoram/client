import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { FeedItemSmall } from "@/components";

const FeedSmallGrid = ({ data, isLoading, ...props }) => {
  const feeds = isLoading ? (
    <FeedItemSmall isLoading {...props} />
  ) : (
    data.map(({ id, ...props }, idx) => {
      return (
        <FeedItemLink to={id} key={idx}>
          <FeedItemSmall {...props} />
        </FeedItemLink>
      );
    })
  );

  return <Layout {...props}>{feeds}</Layout>;
};

FeedSmallGrid.propTypes = {
  data: PropTypes.arrayOf(Object),
};

export default FeedSmallGrid;

const Layout = styled.div`
  display: flex;
  gap: 20px;
  margin: auto;
  align-items: center;
`;

const FeedItemLink = styled(Link)`
  text-decoration: none;
`;
