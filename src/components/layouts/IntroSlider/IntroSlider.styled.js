import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const titleColor = {
  light: colors.gray800,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

export const Layout = styled.div`
  width: 100%;

  .swiper {
    height: 400px;
  }
`;

export const Item = styled.div`
  position: relative;
  overflow: hidden;
  height: 400px;
  padding: 40px 0 0 0px;
`;

export const Content = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 400px;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  filter: opacity(0.3) blur(500px);
  z-index: -1;
`;

export const TitleBox = styled.div`
  padding: 4rem;
  border-radius: 8px;
  flex-shrink: 0;
  word-break: keep-all;

  @media screen and (max-width: 530px) {
    flex-shrink: 1;
  }
`;

export const SubTitle = styled.div`
  padding-bottom: 0.5rem;

  line-height: ${lineHeight.h3};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => subtitleColor[props.theme]};

  @media screen and (max-width: 980px) {
    font-size: ${fontSize.lg};
    line-height: ${lineHeight.lg};
    padding-bottom: 0;
  }
`;

export const Title = styled.div`
  padding-bottom: 1rem;

  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
  color: ${(props) => titleColor[props.theme]};

  @media screen and (max-width: 980px) {
    font-size: ${fontSize.h3};
  }
`;

export const Description = styled.div`
  padding-bottom: 2rem;

  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};

  @media screen and (max-width: 980px) {
    font-size: ${fontSize.sm};
  }
`;

export const JobLink = styled(Link)`
  text-decoration: none;
`;
