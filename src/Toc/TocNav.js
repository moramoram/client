import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { TocItem } from "./TocItem";
import { color } from "../shared/styles";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const bgColors = {
  dark: color.black,
  light: color.white,
};

const borderColor = {
  dark: color.gray700,
  light: color.gray200,
};

const TocNavWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 60px;
  // TODO : 레이아웃에 맞게 맞추기
  padding-left: 468px;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};

  background-color: ${(props) => bgColors[props.theme]};
`;

export function TocNav({ items, theme, ...props }) {
  const [current, setCurrent] = useState("info");

  return (
    <TocNavWrapper theme={theme} {...props}>
      {items.map(({ name, title, number }, index) => {
        return (
          <TocItem
            onClick={() => setCurrent(name)}
            status={current === name ? "active" : "default"}
            number={number}
            theme={theme}
            key={index}
          >
            {title}
          </TocItem>
        );
      })}
    </TocNavWrapper>
  );
}

TocNavWrapper.propTypes = {
  items: PropTypes.array.isRequired,
  theme: PropTypes.oneOf(Object.values(THEME)),
};

TocNavWrapper.defaultProps = {
  theme: THEME.LIGHT,
  items: [
    {
      name: "info",
      title: "공고",
      number: null,
    },
    {
      name: "study",
      title: "스터디",
      number: 5,
    },
    {
      name: "comments",
      title: "댓글",
      number: 20,
    },
  ],
};
