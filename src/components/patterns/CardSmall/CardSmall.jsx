import React from "react";
import PropTypes from "prop-types";

import {
  Layout,
  Thumbnail,
  TextBox,
  Title,
  Highlight,
} from "./CardSmall.styled";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const CardSmall = ({ isLoading, contents, ...props }) => {
  if (isLoading) {
    contents = {
      title: "",
      highlight: "",
      src: "",
    };
  }

  const { title, highlight, src } = contents;
  return (
    <Layout isLoading={isLoading} {...props}>
      <Thumbnail
        className="thumbnail"
        src={src}
        size="small"
        isLoading={isLoading}
        {...props}
      />
      <TextBox isLoading={isLoading}>
        <Title isLoading={isLoading} {...props}>
          {title}
        </Title>
        <Highlight isLoading={isLoading} {...props}>
          {highlight}
        </Highlight>
      </TextBox>
    </Layout>
  );
};

CardSmall.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLiked: PropTypes.bool,
  contents: PropTypes.objectOf(String).isRequired,
};

CardSmall.defaultProps = {
  theme: THEME.LIGHT,
  isLoading: false,
  isDisabled: false,
  isLiked: false,
};

export default CardSmall;
