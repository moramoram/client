import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

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

const Layout = styled.div`
  display: flex;
  gap: 20px;
  max-width: 940px;
  overflow-x: auto;

  @media screen and (max-width: 530px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const FeedItemLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;
