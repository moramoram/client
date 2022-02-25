import React from "react";
import PropTypes from "prop-types";

import { Layout, FeedItemLink } from "./FeedSmallGrid.styled";
import { FeedItemSmall } from "@/components";

const FeedSmallGrid = ({ data, isLoading, ...props }) => {
  const feedData = isLoading
    ? new Array(3).fill({
        boardId: 1,
      })
    : data;

  return (
    <Layout {...props}>
      {feedData.map(({ boardId, ...data }) => {
        const colorIdx = boardId % 17;

        return (
          <FeedItemLink to={boardId} key={boardId}>
            <FeedItemSmall
              isLoading={isLoading}
              colorIdx={colorIdx}
              {...data}
              {...props}
            />
          </FeedItemLink>
        );
      })}
    </Layout>
  );
};

FeedSmallGrid.propTypes = {
  data: PropTypes.arrayOf(Object),
  isLoading: PropTypes.bool,
};

export default FeedSmallGrid;
