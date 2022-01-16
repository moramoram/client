import React from "react";
import PropTypes from "prop-types";
import { Logo } from "../Logo/Logo";
import styled, { css } from "styled-components";
import { glowLight, glowDark } from "../shared/animation";
import { Icon } from "../Icon/Icon";
import { ImageBox } from "../ImageBox/ImageBox";
import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";
import { SidebarItem } from "./SidebarItem";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const loadingAnimation = {
  light: css`
    ${glowLight} 1.5s ease-in-out infinite;
  `,
  dark: css`
    ${glowDark} 1.5s ease-in-out infinite;
  `,
};

const ContentBox = styled.div`
  margin: 10px 0px;
`;

const BadgeBox = styled.div`
  margin: 20px 10px;
`;

const SidebarWrapper = styled.div`
  display: block;
  border-radius: 16px;
  width: 400px;
  height: 540px;

  justify-content: center;
  align-items: center;
  animation: ${(props) => props.isLoading && loadingAnimation[props.theme]};

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

export function Sidebar({ theme, isLoading, name, src, ...props }) {
  let items = theme === THEME.LIGHT ? <Logo /> : <Logo theme="dark" />;

  const contents = [
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
  ];

  const badges = [
    "JavaScript",
    "TypeScript",
    "Vue.js",
    "React",
    "Redux",
    "Svelte",
  ];

  return (
    <SidebarWrapper theme={theme} isLoading={isLoading} {...props}>
      <ImageBox className="thumbnail" theme={theme} />
      <ContentBox>
        {contents.map((content, id) => {
          return (
            <SidebarItem
              className="contents-item"
              key={id}
              theme={theme}
              contents={content}
            />
          );
        })}
      </ContentBox>
      <BadgeBox>
        {badges.map((children, id) => {
          return (
            <Badge
              className="badge-item"
              key={id}
              theme={theme}
              mode="secondary"
              color="gray100"
              isBold
            >
              {children}
            </Badge>
          );
        })}
      </BadgeBox>

      <Button theme={theme} minWidth="380px">
        <Icon icon="edit" />
        지원하기
      </Button>
      <Button theme={theme} mode="secondary" minWidth="380px">
        <Icon icon="bookmark" />
        북마크 하기
      </Button>
    </SidebarWrapper>
  );
}

Sidebar.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  src: PropTypes.string,
  contents: PropTypes.objectOf(String).isRequired,
};

Sidebar.defaultProps = {
  theme: THEME.LIGHT,
  isLoading: false,
  src: null,
  name: "logo",
};
