import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Comment } from "@/components";

const CommentList = ({ data, isLoading, ...props }) => {
  return (
    <>
      {data.map((props, idx) => {
        return <Comment {...props} key={idx}></Comment>;
      })}
    </>
  );
};

CommentList.propTypes = {
  data: PropTypes.arrayOf(Object),
};

export default CommentList;
