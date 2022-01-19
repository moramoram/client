import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { glowLight, glowDark } from "../../shared/animation";

import { Icon } from "../../Basic/Icon";
import { ImageBox } from "../../Components/ImageBox/";
import { Badge } from "../../Components/Badge";
import { Button } from "../../Components/Button";
import { SideBarItem } from "../../Components/SideBarItem";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const SideBar = ({ theme, isLoading, contents, badges, src, ...props }) => {
  if (isLoading) {
    contents = [{}, {}, {}, {}];
    badges = ["", "", ""];
  }
  return (
    <SideBarWrapper theme={theme} isLoading={isLoading} {...props}>
      <ImageBox className="thumbnail" theme={theme} isLoading={isLoading} />
      <SideBarBox>
        {contents.map((content, idx) => {
          return (
            <SideBarItem
              className="contents-item"
              key={idx}
              theme={theme}
              isLoading={isLoading}
              contents={content}
            />
          );
        })}
      </SideBarBox>
      <BadgeBox>
        {badges.map((children, idx) => {
          return (
            <Badge
              className="badge-item"
              key={idx}
              theme={theme}
              isLoading={isLoading}
              mode="secondary"
              color="gray100"
              isBold
            >
              {children}
            </Badge>
          );
        })}
      </BadgeBox>

      <Button theme={theme} isLoading={isLoading} minWidth="380px">
        <Icon icon="edit" />
        지원하기
      </Button>
      <Button
        theme={theme}
        isLoading={isLoading}
        mode="secondary"
        minWidth="380px"
      >
        <Icon icon="bookmark" />
        북마크 하기
      </Button>
    </SideBarWrapper>
  );
};

SideBar.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  src: PropTypes.string,
  contents: PropTypes.arrayOf(Object).isRequired,
  badges: PropTypes.arrayOf(String).isRequired,
};

SideBar.defaultProps = {
  theme: THEME.LIGHT,
  isLoading: false,
  src: null,
  name: "logo",
  contents: [
    {
      title: "직무",
      description: "프론트엔드",
      icon: "briefcase",
    },
    {
      title: "고용형태",
      description: "정규직",
      icon: "briefcase",
    },
    {
      title: "경력",
      description: "신입",
      icon: "briefcase",
    },
    {
      title: "근무위치",
      description: "서울 강남구",
      icon: "briefcase",
    },
  ],
  badges: ["", "", "", ""],
};

export default SideBar;

const loadingAnimation = {
  light: css`
    ${glowLight} 1.5s ease-in-out infinite;
  `,
  dark: css`
    ${glowDark} 1.5s ease-in-out infinite;
  `,
};

const SideBarBox = styled.div`
  margin: 10px 0px;
`;

const BadgeBox = styled.div`
  margin: 20px 10px;
`;

const SideBarWrapper = styled.div`
  display: block;
  border-radius: 16px;
  width: 400px;
  height: 540px;

  button {
    margin: 5px 10px;
  }
  .thumbnail {
    margin-buttom: 5px;
  }
  .badge-item {
    margin-right: 5px;
  }
`;
