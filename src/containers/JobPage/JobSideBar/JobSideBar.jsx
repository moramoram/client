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
      <ImageBox className="thumbnail" isLoading={isLoading} {...props} />
      <SideBarBox {...props}>
        {summaryData.map(({ title, icon, id }) => (
          <SideBarItem
            className="contents-item"
            title={title}
            icon={icon}
            description={data[id]}
            isLoading={isLoading}
            {...props}
          />
        ))}
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
              {...props}
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

const summaryData = [
  {
    title: "직무",
    icon: "briefcase",
    id: "task",
  },
  {
    title: "고용 형태",
    icon: "building",
    id: "type",
  },
  {
    title: "경력",
    icon: "monitor",
    id: "career",
  },
  {
    title: "근무 위치",
    icon: "mapPin",
    id: "location",
  },
];

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
