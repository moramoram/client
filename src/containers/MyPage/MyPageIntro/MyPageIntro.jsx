import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Avatar } from "@/components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

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

const titleColor = {
  light: colors.gray800,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const borderColor = {
  light: colors.gray100,
  dark: colors.gray900,
};

const Layout = styled.div`
  width: 100%;
  height: 400px;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 150px 0 0 0px;
  margin: auto;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.div`
  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => titleColor[props.theme]};
`;

const SubTitle = styled.div`
  height: ${lineHeight.h4};

  font-size: ${fontSize.sm};
  color: ${(props) => subtitleColor[props.theme]};
`;
