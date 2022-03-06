import React from "react";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";
import { useMediaQuery } from "react-responsive";

import {
  Content,
  Title,
  SubTitle,
  MyPageIntro,
  IntroContentBox,
  Avatar,
  UsernameBox,
  Username,
  Greetings,
  Layout,
  MainBox,
  StickyNavBox,
  StickyNav,
  ContentBox,
  MobileBox,
} from "./LoadingMyPages.styled";
import { SubNavbar } from "@/components";

const MyPage = () => {
  const theme = useRecoilValue(themeState);
  const isPc = useMediaQuery({ query: "(min-width:980px)" });
  const isMobile = useMediaQuery({ query: "(max-width:980px)" });

  const contents = (
    <Content theme={theme}>
      <Title theme={theme} />
      <SubTitle theme={theme} />
    </Content>
  );

  return (
    <>
      <MyPageIntro theme={theme}>
        <IntroContentBox>
          <Avatar theme={theme} />
          <UsernameBox>
            <Username theme={theme} />
            <Greetings theme={theme} />
          </UsernameBox>
        </IntroContentBox>
      </MyPageIntro>
      <Layout>
        {isPc && (
          <MainBox>
            <StickyNavBox>
              <StickyNav
                data={categoryData}
                theme={theme}
                isLoading
                selected={0}
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
              view="mobile"
              isLoading
              selected={0}
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
    title: "",
  },
  {
    id: 2,
    title: "",
  },
  {
    id: 3,
    title: "",
  },
  {
    id: 4,
    title: "",
  },
  {
    id: 5,
    title: "",
  },
];
