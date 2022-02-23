import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { FeedItem } from "@/components";
import { colors } from "@/_shared";

const FeedGrid = ({ data, isLoading, theme, ...props }) => {
  const feeds = isLoading ? loadingData : data;

  return (
    <Layout {...props}>
      {feeds.map(({ id, ...feedData }, idx) => (
        <FeedItemLink to={`/community/${id}`} key={idx} theme={theme}>
          <FeedItem isLoading={isLoading} theme={theme} {...feedData} />
        </FeedItemLink>
      ))}
    </Layout>
  );
};

FeedGrid.propTypes = {
  data: PropTypes.arrayOf(Object),
};

export default FeedGrid;

const loadingData = new Array(6).fill({
  username: "",
  avatar: "",
  campus: "",
  ordinal: "",
  userDetail: "",
  created: "",
  title: "",
  content: "",
  thumbnail: "",
  likecount: "",
  commentcount: "",
  viewcount: "",
});

const borderColor = {
  light: colors.gray100,
  dark: colors.gray900,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  width: 100%;
  margin: auto;
  padding-top: 32px;
`;

const FeedItemLink = styled(Link)`
  width: 100%;
  padding-bottom: 32px;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};
  text-decoration: none;
`;
