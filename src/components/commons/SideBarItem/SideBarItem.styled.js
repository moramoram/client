import styled from "styled-components";
import { colors, fontSize, fontWeight, loadings } from "@/_shared";

const textColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

export const Layout = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 36px;
  padding: 0 10px;
  margin: 0;
  list-style: none;

  color: ${(props) => textColor[props.theme]};
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  width: 124px;
  height: 28px;
  border-radius: 4px;

  ${(props) => props.isLoading && loadings[props.theme]};
`;

export const Title = styled.h4`
  margin: 0;
  font-size: ${fontSize.p};
  font-weight: ${fontWeight.bold};
  white-space: nowrap;
`;

export const Content = styled.span`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 28px;
  border-radius: 4px;
  overflow: hidden;

  font-size: ${fontSize.p};
  font-weight: ${fontWeight.regular};
  text-overflow: ellipsis;
  white-space: nowrap;

  ${(props) => props.isLoading && loadings[props.theme]};
`;
