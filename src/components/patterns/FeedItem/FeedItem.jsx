import React from "react";
import PropTypes from "prop-types";

import { useMediaQuery } from "react-responsive";

import {
  Layout,
  FlexBox,
  Header,
  InfoBox,
  UserBox,
  User,
  UserDetail,
  CreatedAt,
  ContentBox,
  Title,
  Content,
  Footer,
  IconBox,
  CountNums,
  ThumbnailBox,
  ThumbnailBoxMobile,
} from "./FeedItem.styled";
import { Avatar } from "@/components";
import { Icon } from "@/foundations";

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
  isLoading,
  ...props
}) => {
  let userDetail = ordinal && campus ? `(${ordinal}기 / ${campus})` : "";

  const isDefault = useMediaQuery({ query: "(min-width:530px)" });
  const isSmall = useMediaQuery({ query: "(max-width:530px)" });

  if (isLoading) {
    username = "";
    userDetail = "";
    created = "";
    title = "";
    content = "";
  }

  return (
    <Layout>
      <FlexBox>
        <div>
          <Header>
            <Avatar
              size="large"
              isLoading={isLoading}
              username={username}
              src={avatar}
              {...props}
            />
            <InfoBox>
              <UserBox>
                <User isLoading={isLoading} {...props}>
                  {username}
                </User>
                <UserDetail>{userDetail}</UserDetail>
              </UserBox>
              <CreatedAt isLoading={isLoading} {...props}>
                {created}
              </CreatedAt>
            </InfoBox>
          </Header>
          <ContentBox>
            <Title isLoading={isLoading} {...props}>
              {title}
            </Title>
            <Content isLoading={isLoading} {...props}>
              {content}
            </Content>
            {isSmall && thumbnail && (
              <ThumbnailBoxMobile>
                <img src={thumbnail} alt="" width="100%" />
              </ThumbnailBoxMobile>
            )}
            {isSmall && isLoading && (
              <ThumbnailBoxMobile isLoading={isLoading} {...props} />
            )}
          </ContentBox>
        </div>
        <Footer isLoading={isLoading} {...props}>
          <IconBox>
            <Icon icon="thumbsUp" />
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
      {isDefault && thumbnail && (
        <ThumbnailBox>
          <img src={thumbnail} alt="" width="200px" />
        </ThumbnailBox>
      )}
      {isDefault && isLoading && (
        <ThumbnailBox isLoading={isLoading} {...props} />
      )}
    </Layout>
  );
};

FeedItem.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  username: PropTypes.string,
  avatar: PropTypes.string,
  created: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  thumbnail: PropTypes.string,
  likecount: PropTypes.node,
  commentcount: PropTypes.node,
  viewcount: PropTypes.node,
  isLoading: PropTypes.bool,
};

FeedItem.defaultProps = {
  theme: THEME.LIGHT,
  username: "User",
  avatar: null,
  campus: "서울",
  ordinal: "6",
  created: daysFromToday("2022-01-24"),
  title: "Lorem ipsum",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  thumbnail: null,
  likecount: numToMillion(0),
  commentcount: numToMillion(0),
  viewcount: numToMillion(0),
};

export default FeedItem;
