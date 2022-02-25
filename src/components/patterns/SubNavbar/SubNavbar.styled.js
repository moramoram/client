import styled, { css } from "styled-components";

export const Layout = styled.div`
  display: flex;
  overflow-x: scroll;

  ${(props) =>
    props.view === "default" &&
    css`
      flex-direction: column;
      align-items: stretch;
      width: 200px;
    `}

  > div {
    flex-shrink: 0;
  }

  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;
