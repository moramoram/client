import styled from "styled-components";
import { colors, fontSize, fontWeight, lineHeight } from "@/_shared";

const titleColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const contentColor = {
  dark: colors.gray400,
  light: colors.gray600,
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  max-width: 940px;
  width: 100%;
  padding: 4rem 0;
`;

export const Title = styled.div`
  font-size: ${fontSize.h4};
  line-height: ${lineHeight.h4};
  font-weight: ${fontWeight.bold};
  color: ${(props) => titleColor[props.theme]};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.lg};
  }
`;

export const Content = styled.div`
  display: -webkit-box;
  overflow: hidden;
  height: 3rem;

  color: ${(props) => contentColor[props.theme]};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};
  text-overflow: ellipsis;
`;
