import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  display: flex;
  gap: 20px;

  width: 100%;
  overflow-x: scroll;
  margin: auto;
  align-items: center;
`;

export const CardItemLink = styled(Link)`
  text-decoration: none;
`;
