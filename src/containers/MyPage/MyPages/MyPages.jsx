import React, { useReducer } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { isAuthenticatedState, themeState } from "@/recoil";
import { useMediaQuery } from "react-responsive";
import { GetUserProfile, UserProfileSelector } from "@/api";

import {
  AuthForm,
  MyInfo,
  MyFeed,
  MyComment,
  MyPageIntro,
  MyStudy,
} from "@/containers";
import { SubNavbar } from "@/components";

const MyPage = () => {
  const theme = useRecoilValue(themeState);
  const { data } = GetUserProfile();
  const userProfile = UserProfileSelector(data);
  const isAuthenticated = useRecoilValue(isAuthenticatedState);

  const contentsData = {
    1: <MyInfo userProfile={userProfile} />,
    2: <AuthForm userProfile={userProfile} />,
    3: <MyFeed />,
    4: <MyStudy />,
    5: <MyComment />,
  };

  const handleCategory = (id) => dispatchContents(id);
  const contentsReducer = (state, action) => contentsData[action];
  const [contents, dispatchContents] = useReducer(
    contentsReducer,
    contentsData[1]
  );

  const isPc = useMediaQuery({ query: "(min-width:980px)" });
  const isMobile = useMediaQuery({ query: "(max-width:980px)" });

  return (
    <>
      <MyPageIntro theme={theme} userProfile={userProfile} />
      <Layout>
        {isPc && (
          <MainBox>
            {isAuthenticated ? (
              <>
                <StickyNavBox>
                  <StickyNav
                    data={categoryData}
                    theme={theme}
                    onClick={handleCategory}
                  />
                </StickyNavBox>
                <ContentBox>{contents}</ContentBox>
              </>
            ) : (
              <ContentBox>
                <AuthForm userProfile={userProfile} />
              </ContentBox>
            )}
          </MainBox>
        )}
        {isMobile && (
          <MobileBox>
            {isAuthenticated ? (
              <>
                <SubNavbar
                  data={categoryData}
                  theme={theme}
                  onClick={handleCategory}
                  view="mobile"
                />
                <ContentBox>{contents}</ContentBox>
              </>
            ) : (
              <ContentBox ContentBox>
                <AuthForm userProfile={userProfile} />
              </ContentBox>
            )}
          </MobileBox>
        )}
      </Layout>
    </>
  );
};

export default MyPage;

const categoryData = [
  { id: 1, title: "내 프로필" },
  { id: 2, title: "내 인증 현황" },
  { id: 3, title: "내가 쓴 글" },
  { id: 4, title: "나의 스터디" },
  // { id: 5, title: "내가 쓴 댓글" },
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
