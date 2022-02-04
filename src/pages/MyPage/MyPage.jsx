import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useMediaQuery } from "react-responsive";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";
import { auth } from "@/recoil/auth";

import {
  Authorization,
  MyInfo,
  MyFeed,
  MyComment,
  MyPageIntro,
  MyStudy,
} from "@/containers";
import { SubNavbar } from "@/components";

const MyPage = () => {
  const theme = useRecoilValue(themeState);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [contents, setContents] = useState(null);
  const authState = useRecoilValue(auth);

  const handleCategory = (idx) => {
    setSelectedCategory(idx);
  };

  const isPc = useMediaQuery({
    query: "(min-width:980px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width:979px)",
  });

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
          return <MyStudy />;
        case 4:
          return <MyComment />;
        default:
          return <MyInfo />;
      }
    });
  }, [selectedCategory]);

  return (
    <>
      <MyPageIntro theme={theme} authState={authState} />
      <Layout>
        {isPc && (
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
        )}
        {isMobile && (
          <MobileBox>
            <SubNavbar
              data={categoryData}
              theme={theme}
              onClick={handleCategory}
              view="mobile"
            />
            <ContentBox>{contents}</ContentBox>
          </MobileBox>
        )}
      </Layout>
    </>
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
    title: "나의 스터디",
  },
  {
    id: 4,
    title: "내가 쓴 댓글",
  },
];

const Layout = styled.div`
  padding: 20px;
`;

const MainBox = styled.div`
  display: flex;
  gap: 100px;

  max-width: 1280px;
  width: 100%;
  margin: auto;
  padding: 0 0 4rem 0;
`;

const MobileBox = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 0 0 4rem 0;
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
