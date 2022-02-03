import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";
import { auth } from "@/recoil/auth";

import { SubNavbar } from "@/components";
import {
  Authorization,
  MyInfo,
  MyFeed,
  MyComment,
  MyPageIntro,
} from "@/containers";

const MyPage = () => {
  const theme = useRecoilValue(themeState);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [contents, setContents] = useState(null);
  const authState = useRecoilValue(auth);

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
      <MyPageIntro theme={theme} authState={authState} />
      <MainBox>
        <StickyNavBox>
          <StickyNav
            data={categoryData}
            theme={theme}
            onClick={handleCategory}
          />
        </StickyNavBox>
        <ContentBox>{contents}</ContentBox>
      </MainBox>
    </Layout>
  );
};

export default MyPage;

const categoryData = [
  {
    id: 0,
    title: "내 프로필",
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
`;

const MainBox = styled.div`
  display: flex;
  /* justify-content: center; */
  gap: 100px;
  max-width: 1280px;

  width: 100%;
  height: 100vh;
  padding: 20px;
  margin: auto;
`;

const ContentBox = styled.div`
  width: 100%;
  margin-right: 20px;
`;

const StickyNavBox = styled.div`
  padding-top: 86px;
`;

const StickyNav = styled(SubNavbar)`
  position: sticky;
  top: 150px;
`;
