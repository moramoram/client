import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ImageBox, Badge, Button, SideBarItem } from "@/components";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const JobSideBar = ({ data, badges, isLoading, ...props }) => {
  if (isLoading) {
    data = new Array(4);
    badges = ["", "", ""];
  }

  const handClickPriamry = () => {
    console.log("hello");
  };
  const handClickSecondary = () => {
    console.log("hello");
  };

  return (
    <SideBarWrapper isLoading={isLoading} {...props}>
      <ImageBox className="thumbnail" isLoading={isLoading} />
      <SideBarBox>
        <SideBarItem
          className="contents-item"
          title="직무"
          icon="briefcase"
          description={data.task}
          isLoading={isLoading}
        />
        <SideBarItem
          className="contents-item"
          title="고용 형태"
          icon="building"
          description={data.type}
          isLoading={isLoading}
        />
        <SideBarItem
          className="contents-item"
          title="경력"
          icon="monitor"
          description={data.career}
          isLoading={isLoading}
        />
        <SideBarItem
          className="contents-item"
          title="근무 위치"
          icon="mapPin"
          description={data.location}
          isLoading={isLoading}
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
            >
              {children}
            </Badge>
          );
        })}
      </BadgeBox>

      <Button
        onClick={() => handClickPriamry()}
        isLoading={isLoading}
        minWidth="380px"
      >
        <Icon icon="edit" />
        지원하기
      </Button>
      <Button
        onClick={() => handClickSecondary()}
        sLoading={isLoading}
        mode="secondary"
        minWidth="380px"
      >
        <Icon icon="bookmark" />
        북마크 하기
      </Button>
    </SideBarWrapper>
  );
};

JobSideBar.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  data: PropTypes.arrayOf(Object),
  badges: PropTypes.arrayOf(String),
};

JobSideBar.defaultProps = {
  theme: THEME.LIGHT,
  isLoading: false,
};

export default JobSideBar;

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
    margin: 4px 10px;
  }
  .thumbnail {
    margin-bottom: 12px;
  }
  .badge-item {
    margin-right: 5px;
  }
`;
