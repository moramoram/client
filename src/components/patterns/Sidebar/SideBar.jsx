import React, { useState } from "react";
import PropTypes from "prop-types";

import { Layout, SideBarBox, BadgeBox } from "./SideBar.styled";
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
    <Layout theme={theme} isLoading={isLoading} {...props}>
      <ImageBox
        className="thumbnail"
        src={src}
        theme={theme}
        isLoading={isLoading}
      />
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
    </Layout>
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
};

export default SideBar;
