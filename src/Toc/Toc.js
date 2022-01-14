import { React, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { TocItem } from "./TocItem";

import { color } from "../shared/styles";

const tocData = [
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
];

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const borderColor = {
  dark: color.gray700,
  light: color.gray200,
};

const StyledToc = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};
`;

export function Toc({ theme, ...props }) {
  const [current, setCurrent] = useState("info");

  return (
    <StyledToc theme={theme} {...props}>
      {tocData.map(({ name, title, number }) => {
        return (
          <TocItem
            onClick={() => setCurrent(name)}
            status={current === name ? "active" : "default"}
            number={number}
            theme={theme}
          >
            {title}
          </TocItem>
        );
      })}
    </StyledToc>
  );
}
