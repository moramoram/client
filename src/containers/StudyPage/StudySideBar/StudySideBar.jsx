import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ImageBox, Badge, Button, BookMark, SideBarItem } from "@/components";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const StudySideBar = ({ data, isLoading, ...props }) => {
  const [isMarked, setIsMarked] = useState(data?.scrap);

  if (isLoading) {
    data = { badges: ["", "", ""] };
  }

  return (
    <Layout isLoading={isLoading} {...props}>
      <ImageBox
        className="thumbnail"
        isLoading={isLoading}
        src={data.src}
        {...props}
      />
      <SideBarBox>
        {summaryData.map(({ title, icon, id }) => (
          <SideBarItem
            className="contents-item"
            title={title}
            icon={icon}
            description={data[id]}
            isLoading={isLoading}
            key={id}
            {...props}
          />
        ))}
      </SideBarBox>
      <BadgeBox>
        {data.badges.map((children, idx) => {
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
    </Layout>
  );
};

StudySideBar.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  data: PropTypes.objectOf(String),
};

StudySideBar.defaultProps = {
  theme: THEME.LIGHT,
  isLoading: false,
};

export default StudySideBar;

const summaryData = [
  {
    title: "종류",
    icon: "target",
    id: "type",
  },
  {
    title: "목표 기업",
    icon: "building",
    id: "target",
  },
  {
    title: "진행 방식",
    icon: "tag",
    id: "onOff",
  },
  {
    title: "모집 인원",
    icon: "users",
    id: "people",
  },
];

const SideBarBox = styled.div`
  margin: 10px 0px;
`;

const BadgeBox = styled.div`
  display: flex;
  gap: 5px;
  margin: 20px 10px;
  div {
    margin-left: 4px;
  }
`;

const Layout = styled.div`
  display: block;
  position: sticky;
  top: 180px;

  width: 400px;
  height: 540px;
  border-radius: 16px;

  button {
    margin: 6px 10px;
    width: calc(100% - 20px);
  }
  .thumbnail {
    margin-bottom: 12px;
  }
`;
