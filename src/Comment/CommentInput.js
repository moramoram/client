import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { color, shadow } from "../shared/styles";
import { Icon } from "../Icon/Icon";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const bgColor = {
  dark: color.gray900,
  light: color.gray25,
};

const textColor = {
  dark: color.gray25,
  light: color.gray900,
};

const CommentInputWrapper = styled.label`
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

const TextareaWrapper = styled.textarea`
  width: 100%;
  resize: none;

  border: none;
  background-color: ${(props) => bgColor[props.theme]};

  color: ${(props) => textColor[props.theme]};

  ::placeholder {
    color: ${color.gray500};
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const NumofChars = styled.span`
  display: block;
  font-size: 10px;
  color: ${color.gray500};
`;

const ButtonsWrapper = styled.div`
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

export function CommentInput({ theme, ...props }) {
  const textareaRef = useRef(null);

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

  useEffect(() => {
    const node = textareaRef.current;

    node.style.height = "auto"; // 기본 height 값 초기화 (없을 경우 텍스트 삭제 시 높이 유지)
    node.style.height = `${node.scrollHeight}px`;
  }, [comment]);

  return (
    <CommentInputWrapper theme={theme} {...props}>
      <TextareaWrapper
        placeholder="댓글로 의견을 나눠보세요 :)"
        ref={textareaRef}
        onChange={onChange}
        maxLength="500"
        value={comment.value}
        theme={theme}
      />
      <BottomWrapper>
        <NumofChars>{comment.count}/500</NumofChars>
        <ButtonsWrapper>
          <Icon icon="smile" aria-hidden />
          <Button
            disabled={!comment.value ? "true" : ""}
            theme={theme}
            {...props}
          >
            등록
          </Button>
        </ButtonsWrapper>
      </BottomWrapper>
    </CommentInputWrapper>
  );
}

CommentInput.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
};

CommentInput.defaultProps = {
  theme: THEME.LIGHT,
};
