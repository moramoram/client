import styled from "styled-components";
import { colors, fontSize } from "@/_shared";

const bgColor = {
  light: colors.gray50,
  dark: colors.gray900,
};

const textColor = {
  light: colors.black,
  dark: colors.white,
};

export const Layout = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 200px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: ${(props) => bgColor[props.theme]};
  cursor: pointer;

  svg {
    height: 18px;
    width: 18px;
    stroke: ${colors.gray500};
  }
`;

export const InputBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  box-sizing: border-box;

  height: 32px;
  width: 100%;
  padding: 0 16px;
  border-radius: 32px;

  background-color: ${(props) => bgColor[props.theme]};
  transition: 0.3s;

  ${(props) => !props.inputOpen && "width: 0;"}
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background: none;

  color: ${(props) => textColor[props.theme]};

  ::placeholder {
    color: ${(props) =>
      props.inputOpen ? colors.gray500 : colors.transparent};
    font-size: ${fontSize.p};
  }

  :focus {
    outline: none;
  }
`;
