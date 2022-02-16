import React, { Suspense } from "react";
import styled from "styled-components";

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

  return (
    <ErrorBoundary fallback={<div />}>
      <Layout>
        <MainIntroSlider theme={theme} />
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

const ContentBox = styled.div``;

const TitleBox = styled.div`
  max-width: 940px;
  margin: auto;
  padding: 20px 0;

  @media screen and (max-width: 960px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  line-height: ${lineHeight.h2};
  margin-bottom: 0.5rem;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => titleColor[props.theme]};
`;
