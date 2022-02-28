import React, { Suspense } from "react";
import styled from "styled-components";

import { useMediaQuery } from "react-responsive";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import {
  MainIntroSlider,
  MainJobSlider,
  MainStudySilder,
  MainCommunitySlider,
  ErrorBoundary,
} from "@/containers";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const MainPage = () => {
  const theme = useRecoilValue(themeState);

  const isPc = useMediaQuery({ query: "(min-width:980px)" });
  const isMobile = useMediaQuery({ query: "(max-width:980px)" });

  return (
    <ErrorBoundary fallback={<div />}>
      <Layout>
        {isPc && <MainIntroSlider theme={theme} />}
        {isMobile && <EmptyBox />}
        <ContentBox>
          <TitleBox>
            <Title theme={theme}>새로 올라온 공고</Title>
          </TitleBox>
          <Suspense fallback={<div />}>
            <MainJobSlider theme={theme} />
          </Suspense>
        </ContentBox>
        <ContentBox>
          <TitleBox>
            <Title theme={theme}>새로 올라온 스터디</Title>
          </TitleBox>
          <Suspense fallback={<div />}>
            <MainStudySilder theme={theme} />
          </Suspense>
        </ContentBox>
        <ContentBox>
          <TitleBox>
            <Title theme={theme}>커뮤니티 인기글</Title>
          </TitleBox>
          <Suspense fallback={<div />}>
            <MainCommunitySlider theme={theme} />
          </Suspense>
        </ContentBox>
      </Layout>
    </ErrorBoundary>
  );
};

export default MainPage;

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  padding-bottom: 10rem;
`;

const EmptyBox = styled.div`
  height: 40px;
`;

const ContentBox = styled.section``;

const TitleBox = styled.hgroup`
  max-width: 940px;
  margin: auto;
  padding: 20px 0;

  @media screen and (max-width: 960px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  line-height: ${lineHeight.h2};
  margin: 0 0 0.5rem 0;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => titleColor[props.theme]};
`;
