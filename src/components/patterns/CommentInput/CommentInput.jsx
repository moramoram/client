import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import {
  Layout,
  Textarea,
  Footer,
  CharCounter,
  ButtonBox,
  Button,
} from "./CommentInput.styled";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const CommentInput = ({ theme, onClick, ...props }) => {
  const [comment, setComment] = useState({
    value: "",
    count: 0,
  });

  const onChange = (e) => {
    setComment({
      value: e.target.value,
      count: e.target.value.length,
    });
  };
  const handleClick = () => {
    onClick(comment);
    setComment({
      value: "",
      count: 0,
    });
  };

  const textareaRef = useRef(null);

  useEffect(() => {
    const node = textareaRef.current;
    node.style.height = "auto";
    node.style.height = `${node.scrollHeight}px`;
  }, [comment]);

  return (
    <Layout theme={theme} {...props}>
      <Textarea
        theme={theme}
        ref={textareaRef}
        onChange={onChange}
        value={comment.value}
        placeholder="댓글을 입력하세요"
        maxLength="500"
      />
      <Footer>
        <CharCounter>{comment.count}/500</CharCounter>
        <ButtonBox>
          <Button
            disabled={!comment.value ? true : false}
            theme={theme}
            onClick={handleClick}
            {...props}
          >
            등록
          </Button>
        </ButtonBox>
      </Footer>
    </Layout>
  );
};

CommentInput.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  onClick: PropTypes.func,
};

CommentInput.defaultProps = {
  theme: THEME.LIGHT,
};

export default CommentInput;
