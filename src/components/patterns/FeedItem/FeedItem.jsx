import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Avatar } from "@/components";
import { Icon } from "@/foundations";
import { colors, fontSize, fontWeight } from "@/_shared";

import { daysFromToday, numToMillion } from "@/utils";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const FeedItem = ({
  username,
  avatar,
  campus,
  ordinal,
  created,
  title,
  content,
  thumbnail,
  likecount,
  commentcount,
  viewcount,
  ...props
}) => {
  const usernameRender = username || "User";

  return (
    <Layout>
      <FlexBox>
        <div>
          <Header>
            <Avatar size="large" username={username} src={avatar} {...props} />
            <InfoBox>
              <UserBox>
                <User {...props}>{usernameRender}</User>
                <UserDetail>
                  ({ordinal}/{campus})
                </UserDetail>
              </UserBox>
              <CreatedAt>{created}</CreatedAt>
            </InfoBox>
          </Header>
          <ContentBox>
            <Title {...props}>{title}</Title>
            <Content {...props}>{content}</Content>
          </ContentBox>
        </div>
        <Footer>
          <IconBox>
            <Icon icon="heart" />
            <CountNums>{likecount}</CountNums>
          </IconBox>
          <IconBox>
            <Icon icon="messageCircle" />
            <CountNums>{commentcount}</CountNums>
          </IconBox>
          <IconBox>
            <Icon icon="eye" />
            <CountNums>{viewcount}</CountNums>
          </IconBox>
        </Footer>
      </FlexBox>
      {thumbnail && <img src={thumbnail} alt="" width="200px" />}
    </Layout>
  );
};

FeedItem.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  username: PropTypes.string,
  avatar: PropTypes.string,
  campus: PropTypes.string,
  ordinal: PropTypes.string,
  created: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  thumbnail: PropTypes.string,
  likecount: PropTypes.string,
  commentcount: PropTypes.string,
  viewcount: PropTypes.string,
};

FeedItem.defaultProps = {
  theme: THEME.LIGHT,
  username: null,
  avatar: null,
  campus: "서울",
  ordinal: "6기",
  created: daysFromToday("2022-01-24"),
  title: "Lorem ipsum",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  thumbnail: null,
  likecount: numToMillion(0),
  commentcount: numToMillion(0),
  viewcount: numToMillion(0),
};

export default FeedItem;

const titleColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const contentColor = {
  dark: colors.gray300,
  light: colors.gray700,
};

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  height: 200px;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 1.5rem;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const UserBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

const User = styled.div`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.p};
  color: ${(props) => titleColor[props.theme]};
`;

const UserDetail = styled.div`
  color: ${colors.gray500};
  font-size: ${fontSize.sm};
`;

const CreatedAt = styled.div`
  color: ${colors.gray500};
  font-size: ${fontSize.sm};
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`;

const Title = styled.div`
  color: ${(props) => titleColor[props.theme]};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h4};
`;

const Content = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  max-height: 3rem;

  color: ${(props) => contentColor[props.theme]};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.p};
  line-height: 1.5rem;

  text-overflow: ellipsis;
`;

const Footer = styled.div`
  display: flex;
  gap: 1.5rem;

  svg {
    width: 18px;
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: ${colors.gray500};
`;

const CountNums = styled.div`
  font-size: ${fontSize.sm};
`;
