import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Icon from "../../Foundations/Icon/Icon";
import { color, shadow } from "../../shared/styles";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const CommentInput = ({ theme, ...props }) => {
  // 텍스트 입력 시 글자수 카운트 및 버튼 활성화
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

  // 텍스트 입력 시 textarea 세로 사이즈 조정
  const textareaRef = useRef(null);

  useEffect(() => {
    const node = textareaRef.current;

    node.style.height = "auto"; // 기본 height 값 초기화 (없을 경우 텍스트 삭제 시 높이 유지)
    node.style.height = `${node.scrollHeight}px`;
  }, [comment]);

  return (
    <Layout theme={theme} {...props}>
      <Textarea
        theme={theme}
        ref={textareaRef}
        onChange={onChange}
        value={comment.value}
        placeholder="댓글로 의견을 나눠보세요 :)"
        maxLength="500"
      />
      <Footer>
        <CharCounter>{comment.count}/500</CharCounter>
        <ButtonBox>
          <Icon icon="smile" aria-hidden />
          <Button
            disabled={!comment.value ? "true" : ""}
            theme={theme}
            {...props}
          >
            등록
          </Button>
        </ButtonBox>
      </Footer>
    </Layout>
  );
};

export default CommentInput;

CommentInput.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
};

CommentInput.defaultProps = {
  theme: THEME.LIGHT,
};

const bgColor = {
  dark: color.gray900,
  light: color.gray25,
};

const textColor = {
  dark: color.gray25,
  light: color.gray900,
};

const Layout = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  width: 620px;
  padding: 9px 13px;
  border-radius: 0.5rem;
  box-shadow: ${shadow.base};

  background-color: ${(props) => bgColor[props.theme]};
`;

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  overflow: hidden;
  border: none;
  background-color: ${(props) => bgColor[props.theme]};

  color: ${(props) => textColor[props.theme]};

  ::placeholder {
    color: ${color.gray500};
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const CharCounter = styled.span`
  display: block;
  font-size: 10px;
  color: ${color.gray500};
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    width: 20px;
    height: 20px;
    stroke: ${color.gray500};
    cursor: pointer;
  }
`;

const Button = styled.button`
  width: 72px;
  height: 28px;
  border: 1px solid ${color.blue100};
  border-radius: 4px;

  background-color: ${color.blue100};
  color: ${color.white};

  cursor: pointer;

  :disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
