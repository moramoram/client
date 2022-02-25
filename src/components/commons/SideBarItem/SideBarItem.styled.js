import styled from "styled-components";
import { colors, fontSize, fontWeight, loadings } from "@/_shared";

const textColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

export const Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 36px;
  padding: 0 10px;

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

  font-size: ${fontSize.p};
  font-weight: ${fontWeight.bold};
  white-space: nowrap;

  ${(props) => props.isLoading && loadings[props.theme]};
`;

export const Title = styled.div``;

export const Content = styled.div`
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
