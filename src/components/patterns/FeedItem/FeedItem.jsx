import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { useMediaQuery } from "react-responsive";

import { Avatar } from "@/components";
import { Icon } from "@/foundations";
import { colors, fontSize, fontWeight, lineHeight, loadings } from "@/_shared";

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
  username: null,
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
  width: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  flex-grow: 1;
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
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};
  font-weight: ${fontWeight.bold};
  color: ${(props) => titleColor[props.theme]};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.sm};
  }

  ${(props) =>
    props.isLoading &&
    css`
      width: 120px;
      height: ${lineHeight.p};
      border-radius: 4px;
      animation: ${loadings[props.theme]};
    `}
`;

const UserDetail = styled.div`
  font-size: ${fontSize.sm};
  line-height: ${fontSize.p};
  color: ${colors.gray500};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.xs};
  }
`;

const CreatedAt = styled.div`
  font-size: ${fontSize.sm};
  line-height: ${fontSize.sm};
  color: ${colors.gray500};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.xs};
  }

  ${(props) =>
    props.isLoading &&
    css`
      width: 60px;
      height: ${fontSize.sm};
      border-radius: 4px;
      animation: ${loadings[props.theme]};
    `}
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4px;

  width: 100%;
`;

const Title = styled.div`
  font-size: ${fontSize.lg};
  line-height: ${lineHeight.lg};
  font-weight: ${fontWeight.bold};
  color: ${(props) => titleColor[props.theme]};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.p};
  }

  ${(props) =>
    props.isLoading &&
    css`
      max-width: 200px;
      height: ${lineHeight.lg};
      border-radius: 4px;
      animation: ${loadings[props.theme]};
    `}
`;

const Content = styled.div`
  display: -webkit-box;
  overflow: hidden;
  height: 3rem;

  color: ${(props) => contentColor[props.theme]};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};
  text-overflow: ellipsis;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.sm};
  }

  ${(props) =>
    props.isLoading &&
    css`
      width: 100%;
      height: 3rem;
      border-radius: 4px;
      animation: ${loadings[props.theme]};
    `}
`;

const Footer = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${colors.gray500};

  ${(props) =>
    props.isLoading &&
    css`
      max-width: 200px;
      height: 24px;
      border-radius: 4px;
      animation: ${loadings[props.theme]};
      color: ${colors.transparent};
    `}
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    width: 18px;
  }
`;

const CountNums = styled.div`
  font-size: ${fontSize.sm};
`;

const ThumbnailBox = styled.div`
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  ${(props) =>
    props.isLoading &&
    css`
      width: 200px;
      height: 200px;
      animation: ${loadings[props.theme]};
    `}
`;

const ThumbnailBoxMobile = styled.div`
  margin-top: 1rem;

  ${(props) =>
    props.isLoading &&
    css`
      width: 100%;
      height: 200px;
      background-color: gray;
      animation: ${loadings[props.theme]};
    `}
`;
