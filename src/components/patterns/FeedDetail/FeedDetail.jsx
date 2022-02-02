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
  ...props
}) => {
  const usernameRender = username ?? "User";

  return (
    <Layout>
      <Title {...props}>{title}</Title>
      <Header {...props}>
        <FlexBox>
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
        </FlexBox>
        <FlexBox>
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
        </FlexBox>
      </Header>
      <Content {...props}>{content}</Content>
    </Layout>
  );
};

FeedDetail.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  username: PropTypes.string,
  avatar: PropTypes.string,
  campus: PropTypes.string,
  ordinal: PropTypes.string,
  created: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any,
  likecount: PropTypes.node,
  commentcount: PropTypes.node,
  viewcount: PropTypes.node,
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
};

export default FeedDetail;

const titleColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const contentColor = {
  dark: colors.gray300,
  light: colors.gray700,
};

const borderColor = {
  light: colors.gray300,
  dark: colors.gray800,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding-top: 80px;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};
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

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.sm};
  }
`;

const UserDetail = styled.div`
  color: ${colors.gray500};
  font-size: ${fontSize.sm};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.xs};
  }
`;

const CreatedAt = styled.div`
  color: ${colors.gray500};
  font-size: ${fontSize.sm};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.xs};
  }
`;

const Title = styled.div`
  color: ${(props) => titleColor[props.theme]};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
`;

const Content = styled.div`
  padding: 1rem 0 3rem 0;

  color: ${(props) => contentColor[props.theme]};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.p};
  line-height: 1.5rem;
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
