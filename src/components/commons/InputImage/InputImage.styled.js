import styled from "styled-components";
import { colors, fontSize, fontWeight, shadows } from "@/_shared";

const bgColor = {
  light: colors.white,
  dark: colors.gray900,
};

const borderColor = {
  light: {
    default: colors.gray300,
    error: colors.errorOpacity200,
  },
  dark: {
    default: colors.gray700,
    error: colors.errorOpacity200,
  },
};

const iconColor = {
  light: colors.gray300,
  dark: colors.gray600,
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  padding: 3rem;
  border-radius: 8px;
  border: 2px dashed ${(props) => borderColor[props.theme][props.status]};
  box-shadow: ${shadows.button};

  background-color: ${(props) => bgColor[props.theme]};
  cursor: pointer;

  svg {
    width: 42px;
    height: 42px;
    stroke: ${(props) => iconColor[props.theme]};
  }
`;

export const Title = styled.div`
  padding-top: 1rem;
  color: ${colors.blue100};
  font-weight: ${fontWeight.bold};
`;

export const Description = styled.div`
  color: ${colors.gray500};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.sm};
`;
