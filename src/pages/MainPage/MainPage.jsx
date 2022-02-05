import React from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { JobSlider, StudySlider } from "@/containers";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const MainPage = () => {
  const theme = useRecoilValue(themeState);

  return (
    <Layout>
      <ContentBox>
        <TitleBox>
          <Title theme={theme}>새로 올라온 공고</Title>
          {/* <SubTitle theme={theme}>채용 공고를 빠르게 만나보세요</SubTitle> */}
        </TitleBox>
        <JobSlider theme={theme} />
      </ContentBox>
      <ContentBox>
        <TitleBox>
          <Title theme={theme}>새로 올라온 스터디</Title>
          {/* <SubTitle theme={theme}>채용 공고를 빠르게 만나보세요</SubTitle> */}
        </TitleBox>
        <StudySlider theme={theme} />
      </ContentBox>
    </Layout>
  );
};

export default MainPage;

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 20rem 0;
`;

const ContentBox = styled.div``;

const TitleBox = styled.div`
  max-width: 940px;
  margin: auto;
  padding: 20px;
`;

const Title = styled.div`
  line-height: ${lineHeight.h2};
  margin-bottom: 0.5rem;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => titleColor[props.theme]};
`;

const SubTitle = styled.div`
  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
`;
