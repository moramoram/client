import React, { useState } from "react";
import PropTypes from "prop-types";

import { useMediaQuery } from "react-responsive";

import {
  Layout,
  Header,
  TitleBox,
  Category,
  Title,
  DropdownBox,
  AvatarBox,
  InfoBox,
  UserBox,
  User,
  UserDetail,
  CreatedAt,
  Content,
} from "./FeedDetail.styled";
import { Avatar, DropdownSmall } from "@/components";
import { Icon } from "@/foundations";

import { daysFromToday, numToMillion } from "@/utils";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const FeedDetail = ({
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
  dropdownItems,
  boardType,
  isDisabled,
  isLoading,
  ...props
}) => {
  let usernameRender = username ?? "User";
  let userDetailRender = `(${ordinal}기 / ${campus})`;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isDefault = useMediaQuery({ query: "(min-width:530px)" });
  const category = !isLoading ? categoryData[boardType] : "";
  if (isLoading) {
    title = "";
    usernameRender = "";
    userDetailRender = "";
    created = "";
    content = "";
  }

  return (
    <Layout>
      <Header>
        <TitleBox>
          <Category isLoading={isLoading} {...props}>
            {category}
          </Category>
          <Title isLoading={isLoading} {...props}>
            {title}
          </Title>
        </TitleBox>
        {!isDisabled && (
          <DropdownBox>
            <Icon
              icon="moreVertical"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <DropdownSmall items={dropdownItems} size="small" {...props} />
            )}
          </DropdownBox>
        )}
      </Header>
      <AvatarBox {...props}>
        <Avatar
          size={isDefault ? "large" : "medium"}
          username={username}
          src={avatar}
          isLoading={isLoading}
          {...props}
        />
        <InfoBox>
          <UserBox isLoading={isLoading} {...props}>
            <User {...props}>{usernameRender}</User>
            {!!ordinal && campus && <UserDetail>{userDetailRender}</UserDetail>}
          </UserBox>
          <CreatedAt isLoading={isLoading} {...props}>
            {created}
          </CreatedAt>
        </InfoBox>
      </AvatarBox>
      <Content isLoading={isLoading} {...props}>
        {content}
      </Content>
    </Layout>
  );
};

FeedDetail.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  username: PropTypes.string,
  avatar: PropTypes.string,
  campus: PropTypes.string,
  ordinal: PropTypes.number,
  created: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any,
  likecount: PropTypes.node,
  commentcount: PropTypes.node,
  viewcount: PropTypes.node,
  isLoading: PropTypes.bool,
};

FeedDetail.defaultProps = {
  theme: THEME.LIGHT,
  username: null,
  avatar: null,
  campus: "서울",
  ordinal: "6기",
  created: daysFromToday("2022-01-24"),
  title: "Lorem ipsum",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  likecount: numToMillion(0),
  commentcount: numToMillion(0),
  viewcount: numToMillion(0),
  isLoading: false,
};

export default FeedDetail;

const categoryData = {
  1: "자유게시판",
  2: "익명게시판",
  3: "취업 정보 게시판",
  4: "질문 게시판",
};
