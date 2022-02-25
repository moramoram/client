import React from "react";
import PropTypes from "prop-types";

import {
  Layout,
  ContentBox,
  BookMarkBox,
  TextBox,
  Highlight,
  Title,
  Subtitle,
  BadgeBox,
} from "./CardResponsive.styled";
import { Badge, BookMark, ImageBoxResponsive } from "@/components";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const CardResponsive = ({
  theme,
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
      <ImageBoxResponsive
        className="thumbnail"
        src={src}
        theme={theme}
        isLoading={isLoading}
        {...props}
      />
      <ContentBox>
        <TextBox theme={theme} isLoading={isLoading}>
          <Highlight {...props}>{highlight}</Highlight>
          <Title theme={theme}>{title}</Title>
          <Subtitle theme={theme}>{subtitle}</Subtitle>
        </TextBox>
        <BadgeBox>
          {badges.map((children, id) => {
            return (
              <Badge
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
      </ContentBox>
    </Layout>
  );
};

CardResponsive.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  isLiked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  contents: PropTypes.objectOf(String).isRequired,
};

CardResponsive.defaultProps = {
  theme: THEME.LIGHT,
  isLoading: false,
  isLiked: false,
  isDisabled: false,
  contents: {
    title: "",
    subtitle: "",
    highlight: "",
    src: "",
  },
  badges: ["", "", ""],
};

export default CardResponsive;
