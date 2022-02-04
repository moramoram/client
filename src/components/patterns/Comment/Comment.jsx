import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Avatar } from "@/components";
import { colors, fontSize, fontWeight } from "@/_shared";

import { daysFromToday } from "@/utils";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const Comment = ({ username, src, created, content, ...props }) => {
  const usernameRender = username ? username : "User";

  return (
    <Layout>
      <Avatar size="medium" username={username} src={src} {...props} />
      <ContentBox>
        <InfoBox>
          <User {...props}>{usernameRender}</User>
          <CreatedAt>{created}</CreatedAt>
        </InfoBox>
        <Content {...props}>{content}</Content>
      </ContentBox>
    </Layout>
  );
};

Comment.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  username: PropTypes.string,
  src: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
};

Comment.defaultProps = {
  theme: THEME.LIGHT,
  username: null,
  src: null,
  created: daysFromToday("2022-01-24"),
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

export default Comment;

const usernameColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const contentColor = {
  dark: colors.gray300,
  light: colors.gray700,
};

const Layout = styled.div`
  display: flex;
  gap: 1rem;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

const User = styled.div`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.sm};
  color: ${(props) => usernameColor[props.theme]};
`;

const CreatedAt = styled.div`
  color: ${colors.gray500};
  font-size: ${fontSize.xs};
`;

const Content = styled.div`
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.sm};
  color: ${(props) => contentColor[props.theme]};
`;
