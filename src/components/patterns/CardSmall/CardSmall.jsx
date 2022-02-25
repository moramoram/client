import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ImageBox } from "@/components";
import { colors, fontSize, fontWeight, loadings } from "@/_shared";

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

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const Layout = styled.div`
  width: 220px;
  user-select: none;

  .thumbnail {
    margin-bottom: 16px;
  }
`;

const Thumbnail = styled(ImageBox)`
  width: 100%;
`;

const TextBox = styled.div`
  div {
    display: inline-block;
    border-radius: 4px;
  }
`;

const Title = styled.div`
  min-width: 160px;
  min-height: ${fontSize.p};

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.sm};
  color: ${(props) => titleColor[props.theme]};

  ${(props) => props.isLoading && loadings[props.theme]};
`;

const Highlight = styled.div`
  min-width: 70px;
  min-height: ${fontSize.p};
  margin: 8px 0px;

  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.bold};
  color: ${(props) => (props.isDisabled ? colors.gray400 : colors.blue100)};

  ${(props) => props.isLoading && loadings[props.theme]};
`;
