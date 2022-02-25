import styled from "styled-components";
import { colors, fontSize, fontWeight, loadings } from "@/_shared";

const borderColor = {
  light: colors.gray200,
  dark: colors.gray800,
};

const hoverBgColor = {
  light: colors.gray50,
  dark: colors.gray900,
};

export const Layout = styled.div`
  width: 220px;
  user-select: none;
`;

export const TextBox = styled.div`
  div {
    display: inline-block;
    border-radius: 4px;
    ${(props) => props.isLoading && loadings[props.theme]};
  }
`;

export const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 220px;
  height: 110px;
  margin-bottom: 16px;
  border: 2px dashed ${(props) => borderColor[props.theme]};
  border-radius: 8px;
  transition: 0.3s;

  :hover {
    background-color: ${(props) => hoverBgColor[props.theme]};
  }

  :active {
    background: none;
  }

  svg {
    stroke: ${colors.gray500};
  }
`;

export const Title = styled.div`
  min-width: 160px;
  min-height: ${fontSize.p};

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.sm};
  color: ${colors.gray500};
`;
