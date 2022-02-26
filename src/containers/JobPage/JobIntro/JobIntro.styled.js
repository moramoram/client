import styled from "styled-components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 400px;
  background: url("/images/job-intro.webp");
  background-repeat: no-repeat;
  background-size: cover;

  overflow: hidden;
`;

export const Title = styled.div`
  padding-top: 2rem;

  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
  color: ${colors.gray25};

  user-select: none;
`;

export const SubTitle = styled.div`
  height: ${lineHeight.h4};
  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
  user-select: none;
`;
