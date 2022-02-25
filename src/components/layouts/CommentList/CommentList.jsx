import React from "react";
import PropTypes from "prop-types";

import { Layout, CommentBox } from "./CommentList.styled";
import { Comment } from "@/components";

const CommentList = ({
  currentUser,
  data,
  theme,
  isLoading,
  dropdownItems,
  ...props
}) => {
  const items = isLoading ? dummy : data;
  return (
    <Layout>
      {items.map((props, idx) => {
        return (
          <CommentBox key={idx}>
            <Comment
              theme={theme}
              isDisabled={currentUser !== props.userId}
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
