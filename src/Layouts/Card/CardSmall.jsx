import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { ImageBox } from "../../Components/ImageBox/";
import { glowLight, glowDark } from "../../shared/animation";
import { color, typography } from "../../shared/styles";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const CardSmall = ({ theme, isLoading, contents, ...props }) => {
  if (isLoading) {
    contents = {
      title: "",
      highlight: "",
      src: "",
    };
  }
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
  light: color.gray900,
  dark: color.gray25,
};

const loadingAnimation = {
  light: css`
    ${glowLight} 1.5s ease-in-out infinite;
  `,
  dark: css`
    ${glowDark} 1.5s ease-in-out infinite;
  `,
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
    border-radius: 8px;
    animation: ${(props) => props.isLoading && loadingAnimation[props.theme]};
  }
`;

const Highlight = styled.div`
  min-width: 70px;
  min-height: ${typography.size.paragraph};
  margin: 8px 0px;

  font-size: ${typography.size.b2};
  font-weight: ${typography.weight.bold};
  color: ${color.blue100};
`;

const Title = styled.div`
  min-width: 160px;
  min-height: ${typography.size.paragraph};

  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.b1};
  color: ${(props) => titleColor[props.theme]};
`;
