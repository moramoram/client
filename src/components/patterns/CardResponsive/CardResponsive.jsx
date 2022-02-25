import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Badge, BookMark, ImageBoxResponsive } from "@/components";
import { colors, fontSize, fontWeight, lineHeight, loadings } from "@/_shared";

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

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  position: relative;
  margin-bottom: 1rem;

  > div:nth-child(2) {
    transition: transform 0.3s;
  }

  :hover {
    > div:nth-child(2) {
      transform: scale(1.05);
    }
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BookMarkBox = styled.div`
  position: absolute;
  left: 20px;
  top: -5px;

  z-index: 1;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  div {
    border-radius: 4px;
    ${(props) => props.isLoading && loadings[props.theme]};
  }
`;

const Highlight = styled.div`
  min-width: 70px;
  min-height: ${lineHeight.sm};
  margin-bottom: 4px;

  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.sm};
  color: ${(props) => (props.isDisabled ? colors.gray400 : colors.blue100)};
`;

const Title = styled.div`
  width: 100%;
  min-width: 240px;
  min-height: ${lineHeight.h4};
  overflow: hidden;

  font-size: ${fontSize.h4};
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.h4};
  color: ${(props) => titleColor[props.theme]};

  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Subtitle = styled.div`
  min-width: 140px;
  min-height: ${lineHeight.sm};

  font-size: ${fontSize.sm};
  line-height: ${lineHeight.sm};
  color: ${(props) => subtitleColor[props.theme]};
`;

const BadgeBox = styled.div`
  display: flex;
  gap: 5px;
`;
