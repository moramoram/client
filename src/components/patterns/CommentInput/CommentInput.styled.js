import styled from "styled-components";
import { colors, fontSize } from "@/_shared";

const bgColor = {
  dark: colors.gray900,
  light: colors.gray50,
};

const focusBgColor = {
  dark: colors.black,
  light: colors.white,
};

const textColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

export const Layout = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  padding: 16px;
  border-radius: 0.5rem;

  background-color: ${(props) => bgColor[props.theme]};
  transition: 0.3s;

  :hover {
    background-color: ${(props) => focusBgColor[props.theme]};
    box-shadow: 0 0 0 3px ${colors.blueOpacity100};
  }

  :focus-within {
    background-color: ${(props) => focusBgColor[props.theme]};
    box-shadow: 0 0 0 3px ${colors.blueOpacity100},
      inset 0 0 0 2px ${colors.blueOpacity300};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  overflow: hidden;
  border: none;
  background-color: transparent;

  font-size: ${fontSize.sm};
  color: ${(props) => textColor[props.theme]};

  ::placeholder {
    color: ${colors.gray500};
  }

  :focus {
    outline: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const CharCounter = styled.span`
  display: block;
  font-size: 10px;
  color: ${colors.gray500};
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    width: 20px;
    height: 20px;
    stroke: ${colors.gray500};
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 72px;
  height: 28px;
  border: none;
  border-radius: 4px;

  background-color: ${colors.blue100};
  color: ${colors.white};
  font-size: ${fontSize.sm};

  cursor: pointer;
  transition: 0.3s;

  :disabled,
  :disabled:hover {
    opacity: 0.5;
    cursor: default;
    background-color: ${colors.blue100};
  }

  :hover {
    background-color: ${colors.blue200};
  }

  :active {
    background-color: ${colors.blue150};
  }
`;
