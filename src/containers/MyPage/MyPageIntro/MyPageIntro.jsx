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
  const { profileImg, nickname, authCheck } = userProfile;

  const authState = {
    1: "인증이 필요해요",
    2: "아직 인증이 완료되지 않았어요",
    3: `${nickname}님 안녕하세요!`,
  };

  return (
    <>
      <Layout {...props}>
        <ContentBox>
          <Avatar size="extraLarge" src={profileImg} />
          <TitleBox>
            <Title {...props}>{nickname}</Title>
            <SubTitle {...props}>{authState[authCheck]}</SubTitle>
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
