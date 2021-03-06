import styled, { css } from "styled-components";
import { colors, fontSize, fontWeight, shadows } from "@/_shared";

const textColor = {
  light: colors.black,
  dark: colors.white,
};

const bgColor = {
  light: colors.gray50,
  dark: colors.gray900,
};

const focusBgColor = {
  light: colors.white,
  dark: colors.black,
};

const borderColor = {
  light: {
    default: colors.gray50,
    error: colors.errorOpacity200,
    success: colors.gray50,
  },
  dark: {
    default: colors.gray900,
    error: colors.errorOpacity200,
    success: colors.gray900,
  },
};

const labelColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const msgColor = {
  default: colors.gray400,
  error: colors.error,
  success: colors.blue100,
};

const hoverColor = {
  default: colors.blueOpacity200,
  error: colors.errorOpacity200,
  success: colors.blueOpacity200,
};

const insetColor = {
  default: colors.blue100,
  error: colors.errorOpacity200,
  success: colors.blue100,
};

const focusColor = {
  default: colors.blueOpacity100,
  error: colors.errorOpacity100,
  success: colors.blueOpacity100,
};

const requiredColor = {
  default: colors.blue100,
  error: colors.errorOpacity200,
  success: colors.blue100,
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  height: 42px;
  padding: 0 16px;
  border: 1px solid ${(props) => borderColor[props.theme][props.status]};
  border-radius: 8px;

  background-color: ${(props) => bgColor[props.theme]};

  font-size: ${fontSize.sm};
  color: ${colors.gray500};
  box-shadow: ${shadows.button};

  transition: 0.3s;

  svg {
    height: 18px;
    width: 18px;
  }

  ${(props) => css`
    :hover {
      border: 1px solid ${hoverColor[props.status]};
      box-shadow: inset 0 0 0 1px ${hoverColor[props.status]};
      background-color: ${focusBgColor[props.theme]};
    }

    :focus-within {
      box-shadow: 0 0 0 3px ${focusColor[props.status]},
        inset 0 0 0 1px ${insetColor[props.status]};
      background-color: ${focusBgColor[props.theme]};
    }

    :focus-within:hover {
      border: 1px solid ${insetColor[props.status]};
    }
  `}

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      input {
        color: transparent;
      }
    `}
`;

export const InputText = styled.input`
  width: 100%;
  margin-left: 8px;
  border: none;
  background: transparent;

  font-size: ${fontSize.p};
  font-weight: ${fontWeight.regular};
  color: ${(props) => textColor[props.theme]};

  transition: 0.3s;

  ::placeholder {
    color: ${colors.gray500};
    font-size: ${fontSize.p};
  }

  :focus {
    outline: none;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: ${(props) => textColor[props.theme]} !important;
  }
`;

export const Label = styled.label`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  color: ${(props) => labelColor[props.theme]};

  ${(props) =>
    props.isRequired &&
    css`
      ::after {
        content: "*";
        color: ${requiredColor[props.status]};
        padding-left: 0.2rem;
      }
    `}
`;

export const Message = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.regular};
  color: ${(props) => msgColor[props.status]};
`;
