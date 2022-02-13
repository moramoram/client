import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, fontSize, fontWeight, lineHeight } from "@/_shared";

const MODE = {
  DEFAULT: "default",
  BACKGROUND: "background",
};

const LandingDetailSection = ({
  highlight,
  title,
  description,
  src,
  mode,
  ...props
}) => {
  return (
    <Layout mode={mode} {...props}>
      <ContentBox>
        <Highlight>{highlight}</Highlight>
        <Title {...props}>{title}</Title>
        <Description>{description}</Description>
        <ImgBox>
          <img src={src} alt="descrptionImg" />
        </ImgBox>
      </ContentBox>
    </Layout>
  );
};

LandingDetailSection.propTypes = {
  mode: PropTypes.oneOf(Object.values(MODE)),
};

LandingDetailSection.defaultProps = {
  mode: MODE.DEFAULT,
};

export default LandingDetailSection;

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const bgColor = {
  light: {
    default: colors.transparent,
    background: colors.gray25,
  },
  dark: {
    default: colors.transparent,
    background: "#202429",
  },
};

const Layout = styled.div`
  padding: 12rem 0;
  background-color: ${(props) => bgColor[props.theme][props.mode]};

  @media screen and (max-width: 530px) {
    padding: 6rem 0;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  max-width: 960px;
  margin: auto;
  padding: 20px;

  @media screen and (max-width: 530px) {
    gap: 1.5rem;
  }
`;

const Highlight = styled.div`
  color: ${colors.blue100};
  font-size: ${fontSize.h3};
  font-weight: ${fontWeight.bold};
  transition: 0.3s;

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.h4};
    line-height: ${lineHeight.h4};
  }
`;

const Title = styled.div`
  color: ${(props) => titleColor[props.theme]};
  font-size: ${fontSize.h1};
  line-height: ${lineHeight.h1};
  font-weight: ${fontWeight.bold};
  transition: 0.3s;

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.h2};
    line-height: ${lineHeight.h2};
  }
`;

const ImgBox = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;

  > img {
    width: 100%;
  }
`;

const Description = styled.div`
  color: ${colors.gray500};
  font-size: ${fontSize.h4};
  line-height: ${lineHeight.h4};
  transition: 0.3s;

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.p};
    line-height: ${lineHeight.p};
  }
`;
