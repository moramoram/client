import styled from "styled-components";
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
  flex-direction: column;
  width: 100%;
  padding-top: 86px;
`;

export const LogoBox = styled.div`
  padding-bottom: 1rem;
`;

export const Title = styled.h1`
  line-height: ${lineHeight.h2};
  margin: 0 0 2rem 0;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => titleColor[props.theme]};
`;

export const SubTitle = styled.p`
  margin: 0 0 6rem 0;

  color: ${(props) => subtitleColor[props.theme]};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};

  white-space: pre-line;
`;

export const ButtonLink = styled.a`
  text-decoration: none;
  margin-bottom: 2rem;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const AskingForHelp = styled.span`
  color: ${colors.blue100};
  font-weight: ${fontWeight.bold};
  cursor: pointer;

  :hover {
    color: ${colors.blue200};
  }
`;
