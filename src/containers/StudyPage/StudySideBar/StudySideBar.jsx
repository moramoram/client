import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ImageBox, Badge, Button, SideBarItem } from "@/components";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const StudySideBar = ({ data, badges, isLoading, ...props }) => {
  if (isLoading) {
    data = new Array(4);
    badges = ["", "", ""];
  }

  const handleonClick = () => {
    console.log("hello");
  };

  return (
    <Layout isLoading={isLoading} {...props}>
      <ImageBox className="thumbnail" isLoading={isLoading} {...props} />
      <SideBarBox>
        <SideBarItem
          className="contents-item"
          title="종류"
          icon="target"
          description={data.type}
          isLoading={isLoading}
          {...props}
        />
        <SideBarItem
          className="contents-item"
          title="목표 기업"
          icon="building"
          description={data.target}
          isLoading={isLoading}
          {...props}
        />
        <SideBarItem
          className="contents-item"
          title="모집 인원"
          icon="users"
          description={data.people}
          isLoading={isLoading}
          {...props}
        />
        <SideBarItem
          className="contents-item"
          title="스터디 지역"
          icon="mapPin"
          description={data.location}
          isLoading={isLoading}
          {...props}
        />
      </SideBarBox>
      <BadgeBox>
        {badges.map((children, idx) => {
          return (
            <Badge
              className="badge-item"
              key={idx}
              isLoading={isLoading}
              mode="secondary"
              color="gray100"
              isBold
              {...props}
            >
              {children}
            </Badge>
          );
        })}
      </BadgeBox>
      <Button
        onClick={() => handleonClick()}
        sLoading={isLoading}
        mode="secondary"
        width="100%"
      >
        <Icon icon="bookmark" />
        북마크 하기
      </Button>
    </Layout>
  );
};

StudySideBar.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  data: PropTypes.objectOf(String),
  badges: PropTypes.arrayOf(String),
};

StudySideBar.defaultProps = {
  theme: THEME.LIGHT,
  isLoading: false,
};

export default StudySideBar;

const SideBarBox = styled.div`
  margin: 10px 0px;
`;

const BadgeBox = styled.div`
  margin: 20px 10px;
  div {
    margin-left: 4px;
  }
`;

const Layout = styled.div`
  display: block;
  border-radius: 16px;
  width: 400px;
  height: 540px;

  button {
    margin: 4px 10px;
  }
  .thumbnail {
    margin-bottom: 12px;
  }
  .badge-item {
    margin-right: 5px;
  }
`;
