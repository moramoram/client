import styled, { css } from "styled-components";
import { animations, colors } from "@/_shared";

const sizeNum = {
  extraLarge: 100,
  large: 40,
  medium: 28,
  small: 20,
};

const fontSize = {
  xxLarge: "4.5rem",
  xLarge: "3rem",
  large: "1.25rem",
  medium: "0.875rem",
  small: "0.625rem",
};

export const Image = styled.figure`
  display: inline-block;
  overflow: hidden;
  object-fit: cover;

  height: ${(props) => sizeNum[props.size]}px;
  width: ${(props) => sizeNum[props.size]}px;
  min-width: ${(props) => sizeNum[props.size]}px;
  margin: 0;
  border-radius: 50%;

  background-color: ${colors.gray100};

  line-height: ${(props) => sizeNum[props.size]}px;
  text-transform: uppercase;
  user-select: none;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  svg {
    position: relative;
    height: 100%;
    width: 100%;
    vertical-align: top;
  }

  ${(props) =>
    props.src &&
    css`
      background: none;
    `}

  ${(props) =>
    props.isLoading &&
    css`
      path {
        animation: ${animations.glow} 1.5s ease-in-out infinite;
      }
    `}
`;

export const Initial = styled.div`
  color: ${colors.lightest};
  text-align: center;

  color: ${colors.gray800};
  font-size: ${(props) => fontSize[props.size]};
  line-height: ${(props) => sizeNum[props.size]}px;

  user-select: none;
`;
