import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ImageBox } from "@/components";
import { colors, fontSize, fontWeight, loadings } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const CardSmall = ({ theme, isLoading, contents, ...props }) => {
  contents = isLoading && {
    title: "",
    highlight: "",
    src: "",
  };

  const { title, highlight, src } = contents;
  return (
    <Layout theme={theme} isLoading={isLoading} {...props}>
      <ImageBox
        className="thumbnail"
        src={src}
        size="small"
        theme={theme}
        isLoading={isLoading}
      />
      <TextBox theme={theme} isLoading={isLoading}>
        <Title theme={theme}>{title}</Title>
        <Highlight theme={theme}>{highlight}</Highlight>
      </TextBox>
    </Layout>
  );
};

CardSmall.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  isLiked: PropTypes.bool,
  contents: PropTypes.objectOf(String).isRequired,
};

CardSmall.defaultProps = {
  theme: THEME.LIGHT,
  isLoading: false,
  isLiked: false,
  contents: {
    title: "",
    highlight: "",
    src: "",
  },
};

export default CardSmall;

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const Layout = styled.div`
  width: 220px;
  .thumbnail {
    margin-bottom: 16px;
  }
`;

const TextBox = styled.div`
  div {
    display: inline-block;
    border-radius: 4px;
    animation: ${(props) => props.isLoading && loadings[props.theme]};
  }
`;

const Highlight = styled.div`
  min-width: 70px;
  min-height: ${fontSize.p};
  margin: 8px 0px;

  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.bold};
  color: ${colors.blue100};
`;

const Title = styled.div`
  min-width: 160px;
  min-height: ${fontSize.p};

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.sm};
  color: ${(props) => titleColor[props.theme]};
`;
