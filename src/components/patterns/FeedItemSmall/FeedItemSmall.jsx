import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Avatar } from "@/components";
import { colors, fontSize, fontWeight } from "@/_shared";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const FeedItemSmall = ({ username, avatar, title, category, ...props }) => {
  const usernameRender = username || "User";

  return (
    <Layout>
      <FlexBox>
        <ContentBox>
          <Category {...props}>{category}</Category>
          <Title {...props}>{title}</Title>
        </ContentBox>
        <Footer>
          <Avatar size="small" username={username} src={avatar} {...props} />
          <UserBox>
            <User {...props}>{usernameRender}</User>
          </UserBox>
        </Footer>
      </FlexBox>
    </Layout>
  );
};

FeedItemSmall.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  username: PropTypes.string,
  avatar: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
};

FeedItemSmall.defaultProps = {
  theme: THEME.LIGHT,
  username: null,
  avatar: null,
};

export default FeedItemSmall;

const titleColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const Layout = styled.div`
  display: flex;
  padding: 24px;
  background: rgba(239, 241, 251, 1);
  justify-content: space-between;
  border-radius: 12px;
  height: 150px;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 35px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Category = styled.div`
  margin-bottom: 11px;

  color: ${colors.gray500};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.p};
`;

const Title = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;

  max-height: 3rem;
  line-height: 1.5rem;
  text-overflow: ellipsis;

  color: ${(props) => titleColor[props.theme]};
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.bold};
`;

const Footer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const User = styled.div`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.sm};
  color: ${(props) => titleColor[props.theme]};
`;
