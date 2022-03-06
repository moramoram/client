import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  width: 100%;

  .swiper-slide {
    width: 220px !important;
    flex-shrink: 0;
  }
`;

export const CardItemLink = styled(Link)`
  text-decoration: none;
`;
