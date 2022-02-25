import React from "react";
import PropTypes from "prop-types";

import {
  Layout,
  BookMarkBox,
  TextBox,
  Highlight,
  Title,
  Subtitle,
  BadgeBox,
} from "./Card.styled";
import { Badge, BookMark, ImageBox } from "@/components";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const Card = ({
  theme,
  size,
  isLoading,
  isLiked,
  contents,
  badges,
  ...props
}) => {
  if (isLoading) {
    contents = {
      title: "",
      subtitle: "",
      highlight: "",
      src: "",
    };
    badges = ["", "", ""];
  }

  const bookMark = !isLoading && isLiked && <BookMark theme={theme} />;
  const { title, subtitle, highlight, src } = contents;

  return (
    <Layout {...props}>
      <BookMarkBox>{bookMark}</BookMarkBox>
      <ImageBox
        className="thumbnail"
        src={src}
        size="medium"
        theme={theme}
        isLoading={isLoading}
      />
      <TextBox theme={theme} isLoading={isLoading}>
        <Highlight>{highlight}</Highlight>
        <Title theme={theme}>{title}</Title>
        <Subtitle theme={theme}>{subtitle}</Subtitle>
      </TextBox>
      <BadgeBox>
        {badges.map((children, id) => {
          return (
            <Badge
              className="badge-item"
              key={id}
              theme={theme}
              isLoading={isLoading}
              isBold
              mode="secondary"
            >
              {children}
            </Badge>
          );
        })}
      </BadgeBox>
    </Layout>
  );
};

Card.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  isLiked: PropTypes.bool,
  contents: PropTypes.objectOf(String).isRequired,
};

Card.defaultProps = {
  theme: THEME.LIGHT,
  isLoading: false,
  isLiked: false,
  contents: {
    title: "",
    subtitle: "",
    highlight: "",
    src: "",
  },
  badges: ["", "", ""],
};

export default Card;
