import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, fontSize, lineHeight } from "@/_shared";

const bgColor = {
  light: colors.gray25,
  dark: colors.gray900,
};

const borderColor = {
  light: colors.gray100,
  dark: colors.gray700,
};

export const Layout = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const MenuBox = styled.div`
  padding: 80px 60px;
  background: ${(props) => bgColor[props.theme]};

  @media screen and (max-width: 530px) {
    padding: 60px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;

  max-width: 1280px;
  width: 100%;
  margin: auto;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 60px;

  max-width: 940px;
  width: 100%;

  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

export const Heading = styled.p`
  font-size: ${fontSize.p};
  color: ${colors.gray500};
  font-weight: bold;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;

  @media screen and (max-width: 980px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
`;

export const HyperLink = styled.a`
  text-decoration: none;
`;

export const Item = styled.span`
  color: ${colors.gray500};
  font-size: ${fontSize.sm};
  line-height: ${lineHeight.h3};
`;

export const CopyrightBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: ${(props) => bgColor[props.theme]};
  width: 100%;
  border-top: 1px solid ${(props) => borderColor[props.theme]};
`;
