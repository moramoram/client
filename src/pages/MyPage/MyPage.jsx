import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { SubNavbar } from "@/components";
import { Authorization, MyInfo, MyFeed, MyComment } from "@/containers";

const StudyPage = () => {
  const theme = useRecoilValue(themeState);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [contents, setContents] = useState(null);

  const handleCategory = (idx) => {
    setSelectedCategory(idx);
  };

  useEffect(() => {
    setContents(() => {
      switch (selectedCategory) {
        case 0:
          return <MyInfo />;
        case 1:
          return <Authorization />;
        case 2:
          return <MyFeed />;
        case 3:
          return <MyComment />;
        default:
          return <MyInfo />;
      }
    });
  }, [selectedCategory]);

  return (
    <Layout>
      <EmptyBox />
      <ContentBox>
        <StickyNav data={categoryData} theme={theme} onClick={handleCategory} />
        {contents}
      </ContentBox>
    </Layout>
  );
};

export default StudyPage;

const categoryData = [
  {
    id: 0,
    title: "내 정보",
  },
  {
    id: 1,
    title: "내 인증 현황",
  },
  {
    id: 2,
    title: "내가 쓴 글",
  },
  {
    id: 3,
    title: "내가 쓴 댓글",
  },
];

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const EmptyBox = styled.div`
  width: 100vw;
  height: 82px;
`;

const ContentBox = styled.div`
  display: flex;
  margin: 90px;
`;
const StickyNav = styled(SubNavbar)`
  position: sticky;
  top: 150px;
  align-self: flex-start;
`;
