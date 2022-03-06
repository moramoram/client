import styled from "styled-components";
import { colors, fontSize } from "@/_shared";

const borderColor = {
  light: colors.gray300,
  dark: colors.gray800,
};

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 40px;
`;

export const Footer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;

  > button {
    padding: 0 28px;
    white-space: nowrap;
  }

  @media screen and (max-width: 530px) {
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
`;

export const CountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: ${colors.gray500};
`;

export const CountNums = styled.span`
  font-size: ${fontSize.sm};
`;

export const CommentBox = styled.section`
  border-top: 1px solid ${(props) => borderColor[props.theme]};
`;
