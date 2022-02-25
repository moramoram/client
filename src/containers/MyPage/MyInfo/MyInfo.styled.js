import styled from "styled-components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const textColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 86px;
`;

export const Title = styled.div`
  line-height: ${lineHeight.h2};
  margin-bottom: 0.5rem;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => textColor[props.theme]};
`;

export const SubTitle = styled.div`
  margin-bottom: 3rem;

  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputBox = styled.div`
  display: flex;
  gap: 1rem;

  button {
    margin: 6px 0;
    flex-shrink: 0;
  }

  div {
    flex-grow: 1;
  }
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;

  div:last-child {
    flex-grow: 1;
  }
`;

export const Label = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  color: ${(props) => textColor[props.theme]};
`;

export const AvatarBox = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 12px;
`;
