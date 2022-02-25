import styled, { css } from "styled-components";
import { colors, fontSize, fontWeight } from "@/_shared";

const borderColor = {
  light: colors.gray300,
  dark: colors.gray600,
};

const bgColor = {
  light: colors.white,
  dark: colors.black,
};

const circleBorder = {
  current: "12px",
  default: "3px",
  completed: "3px",
};

const circleColor = {
  light: {
    current: colors.blue100,
    default: colors.gray300,
    completed: colors.blue100,
  },
  dark: {
    current: colors.blue100,
    default: colors.gray700,
    completed: colors.blue100,
  },
};

const titleColor = {
  light: {
    current: colors.blue100,
    default: colors.gray900,
    completed: colors.gray900,
  },
  dark: {
    current: colors.blue100,
    default: colors.gray100,
    completed: colors.gray25,
  },
};

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  min-height: 5rem;
  border: 1px solid ${(props) => borderColor[props.theme]};
  border-right: none;
  border-left: none;

  background-color: ${(props) => bgColor[props.theme]};
  color: ${colors.black};

  :first-child {
    border-radius: 8px 0 0 8px;
    border-left: 1px solid ${(props) => borderColor[props.theme]};
  }
  :last-child {
    border-radius: 0 8px 8px 0;
    border-right: 1px solid ${(props) => borderColor[props.theme]};

    .arrow {
      display: none;
    }
  }

  ${(props) =>
    props.status !== "default" &&
    css`
      cursor: pointer;
    `}
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 2rem;
`;

export const StepCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  min-width: 40px;
  height: 40px;
  border: ${(props) => circleBorder[props.status]} solid
    ${(props) => circleColor[props.theme][props.status]};
  border-radius: 50%;
  box-sizing: border-box;

  background-color: ${(props) => bgColor[props.theme]};
  color: ${colors.gray500};

  transition: 0.3s cubic-bezier(0.3, 0, 0, 1);

  svg {
    stroke: ${colors.blue100};
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
`;

export const Title = styled.span`
  display: block;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.p};
  color: ${(props) => titleColor[props.theme][props.status]};

  transition: 0.3s;

  ${(props) =>
    props.status !== "current" &&
    css`
      transform: translateY(8px);
    `}
`;

export const Description = styled.span`
  display: block;
  font-size: ${fontSize.xs};
  color: ${colors.gray500};

  transition: 0.3s;

  ${(props) =>
    props.status !== "current" &&
    `
    opacity: 0
  `}
`;

export const ArrowBox = styled.div`
  overflow: hidden;
  left: 14rem;

  width: 2.2rem;
  min-width: 2rem;
  height: 5rem;
`;

export const Arrow = styled.div`
  float: left;
  position: relative;
  left: -50px;

  width: 5rem;
  height: 5rem;
  border: 1px solid ${(props) => borderColor[props.theme]};

  background-color: ${(props) => bgColor[props.theme]};
  transform: rotate(45deg) skew(15deg, 15deg);
`;
