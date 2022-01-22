import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Badge, BookMark, ImageBox } from "@/components";
import { colors, fontSize, fontWeight, loadings } from "@/_shared";

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
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextBox>
      <BadgeBox>
        {badges.map((children, id) => {
          return (
            <Badge
              className="badge-item"
              key={id}
              theme={theme}
              isLoading={isLoading}
              mode="secondary"
              color="gray100"
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

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const Layout = styled.div`
  width: 300px;
  position: relative;

  .thumbnail {
    margin-bottom: 16px;
  }
`;
const BookMarkBox = styled.div`
  position: absolute;
  left: 20px;
  top: -5px;
`;

const TextBox = styled.div`
  margin-bottom: 8px;

  div {
    display: inline-block;
    border-radius: 4px;
    animation: ${(props) => props.isLoading && loadings[props.theme]};
  }
`;

const Highlight = styled.div`
  min-width: 70px;
  min-height: ${fontSize.sm};
  margin-bottom: 8px;
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  color: ${colors.blue100};
`;

const Title = styled.div`
  min-width: 240px;
  min-height: ${fontSize.h3};
  margin-bottom: 4px;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h4};
  color: ${(props) => titleColor[props.theme]};
`;

const Subtitle = styled.div`
  min-width: 140px;
  min-height: ${fontSize.p};
  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
`;

const BadgeBox = styled.div`
  margin: 12px 0px;

  .badge-item {
    margin-right: 5px;
  }
`;
