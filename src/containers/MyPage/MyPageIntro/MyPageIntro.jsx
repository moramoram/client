import React from "react";
import PropTypes from "prop-types";

import {
  Layout,
  ContentBox,
  TitleBox,
  Title,
  SubTitle,
} from "./MyPageIntro.styled";
import { Avatar } from "@/components";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MyPageIntro = ({ userProfile, ...props }) => {
  const { profileImg, nickname } = userProfile;

  return (
    <>
      <Layout {...props}>
        <ContentBox>
          <Avatar size="extraLarge" src={profileImg} />
          <TitleBox>
            <Title {...props}>{nickname}</Title>
            <SubTitle {...props}>${nickname}님 안녕하세요!</SubTitle>
          </TitleBox>
        </ContentBox>
      </Layout>
    </>
  );
};

MyPageIntro.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.arrayOf(Object),
};

MyPageIntro.defaultProps = {
  theme: THEME.LIGHT,
};

export default MyPageIntro;
