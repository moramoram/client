import React, { useReducer } from "react";

import { useRecoilValue } from "recoil";
import { isLoginState, themeState } from "@/recoil";
import { useMediaQuery } from "react-responsive";
import { GetUserProfile, UserProfileSelector } from "@/api";

import {
  Layout,
  MainBox,
  MobileBox,
  ContentBox,
  StickyNavBox,
  StickyNav,
} from "./MyPages.styled";
import {
  AuthForm,
  MyInfo,
  MyFeed,
  MyComment,
  MyPageIntro,
  MyStudy,
} from "@/containers/MyPage";
import { SubNavbar } from "@/components";

const MyPage = () => {
  const theme = useRecoilValue(themeState);
  const { data } = GetUserProfile();
  const userProfile = UserProfileSelector(data);
  const isLogined = useRecoilValue(isLoginState);

  const contentsData = {
    1: <MyInfo userProfile={userProfile} />,
    2: <MyFeed />,
    3: <MyStudy />,
    4: <MyComment />,
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
            {isLogined ? (
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
            {isLogined ? (
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
  { id: 1, title: "??? ?????????" },
  // { id: 2, title: "??? ?????? ??????" },
  { id: 2, title: "?????? ??? ???" },
  { id: 3, title: "?????? ?????????" },
  // { id: 5, title: "?????? ??? ??????" },
];
