import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ImageBox, Badge, Button, BookMark, SideBarItem } from "@/components";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const SideBar = ({ theme, isLoading, contents, badges, src, ...props }) => {
  const [isMarked, setIsMarked] = useState(false);

  if (isLoading) {
    contents = [{}, {}, {}, {}];
    badges = ["", "", ""];
  }

  return (
    <SideBarWrapper theme={theme} isLoading={isLoading} {...props}>
      <ImageBox className="thumbnail" theme={theme} isLoading={isLoading} />
      <SideBarBox>
        {contents.map(({ title, icon, description }, idx) => {
          return (
            <SideBarItem
              className="contents-item"
              key={idx}
              theme={theme}
              isLoading={isLoading}
              title={title}
              icon={icon}
              description={description}
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
        mode={isMarked ? "active" : "secondary"}
        minWidth="380px"
        onClick={() => setIsMarked(!isMarked)}
      >
        {isMarked ? (
          <>
            <BookMark mode="primary" /> 북마크 완료
          </>
        ) : (
          <>
            <Icon icon="bookmark" /> 북마크 하기
          </>
        )}
      </Button>
    </SideBarWrapper>
  );
};

SideBar.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  src: PropTypes.string,
  contents: PropTypes.arrayOf(Object),
  badges: PropTypes.arrayOf(String),
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
};

export default SideBar;

const SideBarBox = styled.div`
  margin: 10px 0px;
`;

const BadgeBox = styled.div`
  display: flex;
  gap: 5px;
  margin: 20px 10px;
`;

const SideBarWrapper = styled.div`
  display: block;
  border-radius: 16px;
  width: 400px;
  height: 540px;

  button {
    margin: 6px 10px;
    width: calc(100% - 20px);
  }
  .thumbnail {
    margin-bottom: 12px;
  }
`;
