import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.section`
  display: grid;
  width: 100%;
  max-width: 940px;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  gap: 20px;
`;

export const CardItemLink = styled(Link)`
  text-decoration: none;
`;
