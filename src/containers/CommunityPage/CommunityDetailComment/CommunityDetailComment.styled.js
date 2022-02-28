import styled from "styled-components";
import { colors, fontSize, fontWeight } from "@/_shared";

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

export const Title = styled.h2`
  margin: 2rem 0;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => titleColor[props.theme]};
`;
