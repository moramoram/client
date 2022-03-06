import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  display: flex;
  gap: 20px;
  max-width: 940px;
  overflow-x: auto;

  @media screen and (max-width: 530px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const FeedItemLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;
