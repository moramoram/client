import styled from "styled-components";

import { Input } from "@/components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
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
  gap: 2rem;

  flex-grow: 1;
`;

export const InputTitle = styled(Input)`
  :nth-child(2) {
    height: 60px;
  }

  input {
    font-size: ${fontSize.h3};

    ::placeholder {
      font-size: ${fontSize.h3};
    }
  }
`;
