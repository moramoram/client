import styled from "styled-components";
import { InputImage } from "@/components";
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
  success: colors.blue100,
};

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 86px;
`;

export const Title = styled.h1`
  line-height: ${lineHeight.h2};
  margin: 0 0 0.5rem 0;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => titleColor[props.theme]};
`;

export const SubTitle = styled.p`
  margin: 0 0 3rem 0;

  color: ${(props) => subtitleColor[props.theme]};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};
`;

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const InformBox = styled.div`
  display: flex;
  gap: 1rem;

  > div {
    flex-grow: 1;
  }
`;

export const Label = styled.label`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.sm};
  color: ${(props) => labelColor[props.theme]};
`;

export const ImageUploader = styled(InputImage)`
  margin: 6px 0;
`;

export const Message = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.regular};
  line-height: ${lineHeight.sm};
  color: ${(props) => msgColor[props.status]};
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 2rem;
`;

export const ImgBox = styled.div`
  img {
    max-width: 100%;
    border-radius: 8px;
  }
`;
