import styled, { css } from "styled-components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const labelColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const msgColor = {
  default: colors.gray400,
  error: colors.error,
};

const requiredColor = {
  default: colors.blue100,
  error: colors.errorOpacity200,
};

export const Layout = styled.div`
  display: flex;
  gap: 4rem;
  padding-top: 86px;

  @media screen and (max-width: 979px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const TitleBox = styled.div`
  width: 300px;
`;

export const Title = styled.div`
  line-height: ${lineHeight.h2};
  margin-bottom: 0.5rem;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => titleColor[props.theme]};
`;

export const SubTitle = styled.div`
  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 2rem;

  flex-grow: 1;
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.div`
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

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CheckboxBox = styled.div`
  padding-bottom: 6px;
`;

export const RadioBox = styled.div`
  display: flex;
  gap: 1rem;

  padding: 1rem 0;
`;

export const TypeBox = styled.div`
  display: flex;
  gap: 1rem;

  > div {
    flex: 1;
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Message = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.regular};
  color: ${(props) => msgColor[props.status]};
`;
