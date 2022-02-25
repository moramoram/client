import React from "react";
import PropTypes from "prop-types";

import { Layout, FeedItemLink } from "./FeedGrid.styled";
import { FeedItem } from "@/components";

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
