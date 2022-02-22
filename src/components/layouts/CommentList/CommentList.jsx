import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Comment } from "@/components";

const CommentList = ({ data, theme, isLoading, dropdownItems, ...props }) => {
  const items = isLoading ? dummy : data;
  return (
    <Layout>
      {items.map((props, idx) => {
        return (
          <CommentBox key={idx}>
            <Comment
              theme={theme}
              dropdownItems={dropdownItems}
              {...props}
            ></Comment>
          </CommentBox>
        );
      })}
    </Layout>
  );
};

CommentList.propTypes = {
  data: PropTypes.arrayOf(Object),
};

export default CommentList;

const dummy = new Array(6).fill({
  username: "",
  src: null,
  created: null,
  content: null,
});

const Layout = styled.div`
  padding: 2rem 0;
`;

const CommentBox = styled.div`
  padding: 1rem 0;
`;
