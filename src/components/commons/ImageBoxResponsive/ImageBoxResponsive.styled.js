import styled from "styled-components";
import { colors, loadings } from "@/_shared";

const imageBgColor = {
  light: colors.gray25,
  dark: colors.gray900,
};

export const Layout = styled.figure`
  position: relative;
  margin: 0;

  :before {
    content: "";
    display: block;
    padding-top: 50%;
  }
`;

export const ImageBoxWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  border-radius: 8px;
  overflow: hidden;

  background: ${(props) => imageBgColor[props.theme]};

  ${(props) => props.isLoading && loadings[props.theme]};

  svg {
    position: absolute;
    top: 33%;
    left: 33%;

    width: 33%;
    height: 33%;
    filter: ${(props) =>
      props.isDisabled && `blur(4px) grayscale(70%) brightness(50%)`};
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: ${(props) =>
      props.isDisabled && `blur(3px) grayscale(70%) brightness(50%)`};
  }
`;
