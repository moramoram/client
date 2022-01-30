import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "@/foundations";
import { colors, shadows } from "@/_shared";

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
  dark: colors.gray900,
  light: colors.gray25,
};

const focusBgColor = {
  dark: colors.black,
  light: colors.white,
};

const textColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const Layout = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;
  padding: 16px;
  border-radius: 0.5rem;
  box-shadow: ${shadows.base};

  background-color: ${(props) => bgColor[props.theme]};
  transition: 0.3s;

  :hover {
    background-color: ${(props) => focusBgColor[props.theme]};
    box-shadow: 0 0 0 3px ${colors.blueOpacity100};
  }

  :focus-within {
    ${(props) => `
      background-color: ${(props) => focusBgColor[props.theme]};
      box-shadow: 0 0 0 3px ${colors.blueOpacity100},
        inset 0 0 0 2px ${colors.blueOpacity300}
    }
    `};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  overflow: hidden;
  border: none;
  background-color: transparent;

  color: ${(props) => textColor[props.theme]};

  ::placeholder {
    color: ${colors.gray500};
  }

  :focus {
    outline: none;
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
  color: ${colors.gray500};
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    width: 20px;
    height: 20px;
    stroke: ${colors.gray500};
    cursor: pointer;
  }
`;

const Button = styled.button`
  width: 72px;
  height: 28px;
  border: none;
  border-radius: 4px;

  background-color: ${colors.blue100};
  color: ${colors.white};

  cursor: pointer;
  transition: 0.3s;

  :disabled,
  :disabled:hover {
    opacity: 0.5;
    cursor: default;
    background-color: ${colors.blue100};
  }

  :hover {
    background-color: ${colors.blue200};
  }

  :active {
    background-color: ${colors.blue150};
  }
`;
