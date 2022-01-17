import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { glowLight, glowDark } from "../shared/animation";
import { ImageBox } from "../ImageBox/ImageBox";
import { Badge } from "../Badge/Badge";
import { color, typography } from "../shared/styles";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

export const Card = ({
  theme,
  size,
  isLoading,
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
  const { title, subtitle, highlight, src } = contents;

  return (
    <Layout {...props}>
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
              isBold
            >
              {children}
            </Badge>
          );
        })}
      </BadgeBox>
    </Layout>
  );
};

Card.defaultProps = {
  theme: THEME.LIGHT,
  isLoading: false,
  contents: {
    title: "",
    subtitle: "",
    highlight: "",
    src: "",
  },
  badges: ["", "", ""],
};

const titleColor = {
  light: color.gray900,
  dark: color.gray25,
};

const subtitleColor = {
  light: color.gray400,
  dark: color.gray500,
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
  width: 300px;
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
  min-height: ${typography.size.b1};
  font-size: ${typography.size.b1};
  font-weight: ${typography.weight.bold};
  color: ${color.blue100};
`;

const Title = styled.div`
  min-width: 240px;
  min-height: ${typography.size.h3};
  margin: 4px 0px;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.h4};
  color: ${(props) => titleColor[props.theme]};
`;

const Subtitle = styled.div`
  min-width: 140px;
  min-height: ${typography.size.paragraph};
  font-size: ${typography.size.paragraph};
  color: ${(props) => subtitleColor[props.theme]};
`;

const BadgeBox = styled.div`
  margin: 12px 0px;
  .badge-item {
    margin-right: 5px;
  }
`;
