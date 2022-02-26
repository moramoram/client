import styled from "styled-components";
import { colors, fontSize, fontWeight, lineHeight, loadings } from "@/_shared";

const highlightColor = {
  true: colors.blue100,
  false: colors.gray500,
};

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const textColor = {
  light: colors.gray700,
  dark: colors.gray300,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const borderColor = {
  dark: colors.gray700,
  light: colors.gray200,
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  flex-shrink: 0;

  margin-top: 170px;
  width: calc(100% - 500px);
  max-width: 940px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: block;
    border-radius: 4px;
    ${(props) => props.isLoading && loadings[props.theme]};
  }
`;

export const Highlight = styled.div`
  min-width: 70px;
  min-height: ${lineHeight.lg};

  font-size: ${fontSize.lg};
  line-height: ${lineHeight.lg};
  font-weight: ${fontWeight.bold};
  color: ${(props) => highlightColor[props.status]};
`;

export const Title = styled.div`
  min-width: 160px;
  min-height: ${lineHeight.h2};

  font-size: ${fontSize.h2};
  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};
  color: ${(props) => titleColor[props.theme]};
`;

export const SubTitle = styled.div`
  min-width: 160px;
  min-height: ${lineHeight.lg};

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.lg};
  line-height: ${lineHeight.lg};
  color: ${(props) => subtitleColor[props.theme]};
`;

export const Content = styled.div`
  padding: 0 0 2rem 0;
  color: ${(props) => textColor[props.theme]};

  img {
    max-width: 100%;
  }

  h1 {
    padding: 3px 0;
    font-size: 1.5rem;
    font-weight: 700;
  }

  h2 {
    padding: 3px 0;
    font-size: 1.25rem;
    font-weight: 700;
  }

  h3 {
    padding: 3px 0;
    font-size: 1.125em;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    padding: 3px 0;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  ul,
  ol {
    padding-left: 32px;
  }

  pre {
    overflow-x: auto;
  }

  blockquote {
    margin-left: 0;
    padding-left: 1rem;
    border-left: 4px solid ${(props) => borderColor[props.theme]};
  }
`;

export const CardBox = styled.div``;

export const BoxTitle = styled.div`
  padding: 4rem 0 0.2rem 0;
  min-height: ${lineHeight.h3};

  border-top: 1px solid ${(props) => borderColor[props.theme]};
  color: ${(props) => titleColor[props.theme]};

  font-size: ${fontSize.h3};
  line-height: ${lineHeight.h3};
  font-weight: ${fontWeight.bold};
`;

export const BoxDescription = styled.div`
  padding-bottom: 2rem;
  color: ${(props) => subtitleColor[props.theme]};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};
`;
