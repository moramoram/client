import styled from "styled-components";
import { colors, loadings } from "@/_shared";

const imageBgColor = {
  light: colors.gray25,
  dark: colors.gray900,
};

const imageWidth = {
  large: "400px",
  medium: "300px",
  small: "220px",
};

const imageHeight = {
  large: "200px",
  medium: "150px",
  small: "110px",
};

const borderRadius = {
  large: "12px",
  medium: "8px",
  small: "8px",
};

export const ImageBoxWrapper = styled.div`
  display: flex;
  width: ${(props) => imageWidth[props.size]};
  height: ${(props) => imageHeight[props.size]};
  border-radius: ${(props) => borderRadius[props.size]};

  background: ${(props) => imageBgColor[props.theme]};

  align-items: center;
  justify-content: center;

  overflow: hidden;
  transition: 0.3s;

  ${(props) => props.isLoading && loadings[props.theme]};

  svg {
    width: 33%;
    height: 33%;
    filter: ${(props) => props.isDisabled && `blur(5px)`};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: ${(props) => props.isDisabled && `blur(5px)`};
  }
`;
