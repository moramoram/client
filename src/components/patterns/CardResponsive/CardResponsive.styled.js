import styled from "styled-components";
import { colors, fontSize, fontWeight, lineHeight, loadings } from "@/_shared";

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

export const Layout = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;

  position: relative;
  margin-bottom: 1rem;

  > div:nth-child(2) {
    transition: transform 0.3s;
  }

  :hover {
    > div:nth-child(2) {
      transform: scale(1.05);
    }
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BookMarkBox = styled.div`
  position: absolute;
  left: 20px;
  top: -5px;

  z-index: 1;
`;

export const TextBox = styled.hgroup`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  * {
    border-radius: 4px;
    ${(props) => props.isLoading && loadings[props.theme]};
  }
`;

export const Highlight = styled.h3`
  min-width: 70px;
  min-height: ${lineHeight.sm};
  margin: 0 0 4px 0;

  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.sm};
  color: ${(props) => (props.isDisabled ? colors.gray400 : colors.blue100)};
`;

export const Title = styled.h2`
  width: 100%;
  min-width: 240px;
  min-height: ${lineHeight.h4};
  margin: 0;
  overflow: hidden;

  font-size: ${fontSize.h4};
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.h4};
  color: ${(props) => titleColor[props.theme]};

  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Subtitle = styled.span`
  min-width: 140px;
  min-height: ${lineHeight.sm};

  font-size: ${fontSize.sm};
  line-height: ${lineHeight.sm};
  color: ${(props) => subtitleColor[props.theme]};
`;

export const BadgeBox = styled.ul`
  display: flex;
  gap: 5px;
  margin: 0;
  padding: 0;
`;
