import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { FeedItem } from "@/components";
import { colors } from "@/_shared";

const FeedGrid = ({ data, isLoading, theme, ...props }) => {
  const feeds = isLoading ? (
    <FeedItem isLoading theme={theme} {...props} />
  ) : (
    data.map(({ id, ...props }, idx) => {
      return (
        <FeedItemLink to={id} key={idx} theme={theme}>
          <FeedItem theme={theme} {...props} />
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

const borderColor = {
  light: colors.gray100,
  dark: colors.gray900,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  margin: auto;
  padding-top: 32px;
`;

const FeedItemLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};
  padding-bottom: 32px;
`;
