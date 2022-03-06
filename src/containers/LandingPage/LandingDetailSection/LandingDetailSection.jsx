import React from "react";
import PropTypes from "prop-types";

import {
  Layout,
  ContentBox,
  Highlight,
  Title,
  ImgBox,
  Description,
} from "./LandingDetailSection.styled";

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
