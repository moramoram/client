import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useMediaQuery } from "react-responsive";
import { Avatar, Dropdown } from "@/components";
import { Icon } from "@/foundations";
import { colors, fontSize, fontWeight, animations } from "@/_shared";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isDefault = useMediaQuery({
    query: "(min-width:530px)",
  });

  return (
    <Layout>
      <TitleBox>
        <InfoBox>
          <Category>자유게시판</Category>
          <Title {...props}>{title}</Title>
        </InfoBox>
        <DropdownBox>
          <Icon
            icon="moreVertical"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          {isDropdownOpen && (
            <Dropdown
              // TODO : 게시글 수정 및 삭제 로직
              items={[
                {
                  name: "edit",
                  title: "수정",
                  url: "#",
                },
                {
                  name: "delete",
                  title: "삭제",
                  url: "#",
                },
              ]}
              size="small"
            />
          )}
        </DropdownBox>
      </TitleBox>
      <Header {...props}>
        <Avatar
          size={isDefault ? "large" : "medium"}
          username={username}
          src={avatar}
          {...props}
        />
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
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  svg {
    cursor: pointer;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Category = styled.div`
  color: ${colors.blue100};
  font-weight: ${fontWeight.bold};
`;

const Title = styled.div`
  color: ${(props) => titleColor[props.theme]};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.h3};
  }
`;

const DropdownBox = styled.div`
  position: relative;

  svg {
    stroke: ${colors.gray500};
  }

  > div {
    z-index: 9999;
    right: 0px;
    animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
  }
`;

const Header = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};
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

const Content = styled.div`
  padding: 1rem 0 1rem 0;

  color: ${(props) => contentColor[props.theme]};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.p};
  line-height: 1.5rem;

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.sm};
  }
`;
