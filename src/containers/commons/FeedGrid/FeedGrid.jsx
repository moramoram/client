import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { FeedItem } from "@/components";

const FeedGrid = ({ data, isLoading, ...props }) => {
  const feeds = isLoading ? (
    <FeedItem isLoading {...props} />
  ) : (
    data.map(({ url, ...props }, idx) => {
      return (
        <FeedItemLink to={url} key={idx}>
          <FeedItem {...props} />
        </FeedItemLink>
      );
    })
  );

  return <Layout {...props}>{feeds}</Layout>;
};

FeedGrid.propTypes = {
  data: PropTypes.arrayOf(Object),
};

export default FeedGrid;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: auto;
  align-items: center;
`;

const FeedItemLink = styled(Link)`
  text-decoration: none;
`;
