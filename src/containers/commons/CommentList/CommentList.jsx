import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Comment } from "@/components";

const CommentList = ({ data, theme, ...props }) => {
  return (
    <Layout>
      {data.map((props, idx) => {
        return (
          <CommentBox key={idx}>
            <Comment theme={theme} {...props}></Comment>
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

const Layout = styled.div`
  padding: 2rem 0;
`;

const CommentBox = styled.div`
  padding: 1rem 0;
`;
