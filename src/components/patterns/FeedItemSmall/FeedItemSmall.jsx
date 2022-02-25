import React from "react";
import PropTypes from "prop-types";

import {
  Layout,
  ContentBox,
  Category,
  Title,
  Footer,
  UserBox,
  User,
  UserDetail,
} from "./FeedItemSmall.styled";
import { Avatar } from "@/components";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const FeedItemSmall = ({
  boardId,
  writerInfo,
  title,
  category,
  isLoading,
  ...props
}) => {
  if (isLoading) {
    boardId = 1;
    writerInfo = {
      nickname: "",
      ordinal: "",
      campus: "",
      authCheck: 0,
      profileImg: "",
    };
    title = "";
    category = "";
  }

  return (
    <Layout isLoading={isLoading} {...props}>
      <ContentBox>
        <Category {...props}>{category}</Category>
        <Title {...props}>{title}</Title>
      </ContentBox>
      <Footer>
        <Avatar
          size="small"
          username={writerInfo.nickname}
          src={writerInfo.profileImg}
        />
        <UserBox>
          <User {...props}>{writerInfo.nickname}</User>
          {writerInfo.ordinal && writerInfo.campus && (
            <UserDetail>
              ({writerInfo.ordinal} / {writerInfo.campus})
            </UserDetail>
          )}
        </UserBox>
      </Footer>
    </Layout>
  );
};

FeedItemSmall.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  writerInfo: PropTypes.object,
  title: PropTypes.string,
  category: PropTypes.string,
  isLoading: PropTypes.bool,
};

FeedItemSmall.defaultProps = {
  theme: THEME.LIGHT,
  writerInfo: null,
  title: "",
  category: "",
};

export default FeedItemSmall;
