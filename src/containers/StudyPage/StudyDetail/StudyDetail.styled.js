import styled from "styled-components";
import { DropdownSmall } from "@/components";
import {
  animations,
  colors,
  fontSize,
  fontWeight,
  lineHeight,
  loadings,
} from "@/_shared";

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
  light: colors.gray300,
  dark: colors.gray800,
};

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  flex-shrink: 0;

  margin-top: 170px;
  width: calc(100% - 500px);
  max-width: 940px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const TitleBox = styled.hgroup`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    display: block;
    border-radius: 4px;
    ${(props) => props.isLoading && loadings[props.theme]};
  }
`;

export const Highlight = styled.h2`
  min-width: 70px;
  min-height: ${lineHeight.lg};
  margin: 0;

  font-size: ${fontSize.lg};
  line-height: ${lineHeight.lg};
  font-weight: ${fontWeight.bold};
  color: ${(props) => highlightColor[props.status]};
`;

export const Title = styled.h1`
  min-width: 160px;
  min-height: ${lineHeight.h2};
  margin: 0;

  font-size: ${fontSize.h2};
  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};
  color: ${(props) => titleColor[props.theme]};
`;

export const SubTitle = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 160px;
  min-height: ${lineHeight.lg};

  font-weight: ${fontWeight.medium};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.lg};
  color: ${(props) => subtitleColor[props.theme]};
`;

export const DropdownBox = styled.div`
  position: relative;
  padding-top: 1rem;

  svg {
    stroke: ${colors.gray500};
    cursor: pointer;
  }

  > div {
    z-index: 9999;
    right: 0px;
    animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
  }
`;

export const Dropdown = styled(DropdownSmall)`
  width: 160px;
`;

export const Content = styled.article`
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
