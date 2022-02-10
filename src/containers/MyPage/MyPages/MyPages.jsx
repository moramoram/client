import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";
import { useMediaQuery } from "react-responsive";
import { GetUserProfile, UserProfileSelector } from "@/queries";

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

  const { data } = GetUserProfile();
  const userProfile = UserProfileSelector(data);

  const handleCategory = (idx) => {
    setSelectedCategory(idx);
  };

  useEffect(() => {
    setContents(() => {
      switch (selectedCategory) {
        case 1:
          return <MyInfo userProfile={userProfile} />;
        case 2:
          return <Authorization userProfile={userProfile} />;
        case 3:
          return <MyFeed />;
        case 4:
          return <MyStudy />;
        case 5:
          return <MyComment />;
        default:
          return <MyInfo userProfile={userProfile} />;
      }
    });
  }, [setContents]);

  const isPc = useMediaQuery({
    query: "(min-width:980px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width:980px)",
  });

  return (
    <>
      <MyPageIntro theme={theme} userProfile={userProfile} />
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
    id: 1,
    title: "내 프로필",
  },
  {
    id: 2,
    title: "내 인증 현황",
  },
  {
    id: 3,
    title: "내가 쓴 글",
  },
  {
    id: 4,
    title: "나의 스터디",
  },
  {
    id: 5,
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
