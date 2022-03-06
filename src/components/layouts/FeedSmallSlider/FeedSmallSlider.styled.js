import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "@/_shared";

const buttonHoverColor = {
  light: colors.gray25,
  dark: colors.gray900,
};

const buttonIconColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper {
    max-width: 960px;
    margin: 0 2rem;

    @media screen and (max-width: 960px) {
      margin: 0;
    }
  }

  .swiper-slide {
    width: 300px;
  }
`;

export const FeedItemLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

export const Button = styled.button`
  height: 36px;
  border: none;
  border-radius: 4px;

  background: none;
  cursor: pointer;

  :hover {
    background-color: ${(props) => buttonHoverColor[props.theme]};
  }

  :nth-child(2) {
    order: 1;
  }

  svg {
    stroke: ${(props) => buttonIconColor[props.theme]};
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
