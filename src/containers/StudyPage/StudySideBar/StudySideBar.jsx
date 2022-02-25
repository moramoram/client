import React, { useState } from "react";
import PropTypes from "prop-types";

import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { putStudyScrap } from "@/api";

import { SideBarBox, BadgeBox, Layout } from "./StudySideBar.styled";
import { ImageBox, Badge, Button, BookMark, SideBarItem } from "@/components";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const StudySideBar = ({ data, isLoading, ...props }) => {
  const [isMarked, setIsMarked] = useState(data?.scrap);
  const id = useParams().studyId;

  const putScrapMutation = useMutation(putStudyScrap);

  const onScrap = () => {
    setIsMarked(!isMarked);
    putScrapMutation.mutate(id);
  };

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
        {data.badges?.map((children, idx) => {
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
        onClick={onScrap}
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
