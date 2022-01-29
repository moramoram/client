import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ImageBox, Badge, Button, BookMark, SideBarItem } from "@/components";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const JobSideBar = ({ data, badges, isLoading, ...props }) => {
  const [isMarked, setIsMarked] = useState(false);

  if (isLoading) {
    data = new Array(4);
    badges = ["", "", ""];
  }

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

      <Button isLoading={isLoading} minWidth="380px">
        <Icon icon="edit" />
        지원하기
      </Button>
      <Button
        isLoading={isLoading}
        mode={isMarked ? "active" : "secondary"}
        minWidth="380px"
        onClick={() => setIsMarked(!isMarked)}
        {...props}
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

JobSideBar.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  data: PropTypes.objectOf(String),
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
