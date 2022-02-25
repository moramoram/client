import styled from "styled-components";
import { ImageBox } from "@/components";
import { colors, fontSize, fontWeight, loadings } from "@/_shared";

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

export const Layout = styled.div`
  width: 220px;
  user-select: none;

  .thumbnail {
    margin-bottom: 16px;
  }
`;

export const Thumbnail = styled(ImageBox)`
  width: 100%;
`;

export const TextBox = styled.div`
  div {
    display: inline-block;
    border-radius: 4px;
  }
`;

export const Title = styled.div`
  min-width: 160px;
  min-height: ${fontSize.p};

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.sm};
  color: ${(props) => titleColor[props.theme]};

  ${(props) => props.isLoading && loadings[props.theme]};
`;

export const Highlight = styled.div`
  min-width: 70px;
  min-height: ${fontSize.p};
  margin: 8px 0px;

  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.bold};
  color: ${(props) => (props.isDisabled ? colors.gray400 : colors.blue100)};

  ${(props) => props.isLoading && loadings[props.theme]};
`;
