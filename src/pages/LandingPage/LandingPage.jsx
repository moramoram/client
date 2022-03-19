import React from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import {
  LandingHero,
  LandingDetailSection,
  LandingCTASection,
} from "@/containers/LandingPage";
import { ScrollTopButton } from "@/components";

const LandingPage = () => {
  const theme = useRecoilValue(themeState);
  return (
    <>
      <LandingHero theme={theme} />
      <LandingCTASection
        text={`스터디, 취업 정보, 커뮤니티 기능을 모두 담은 \n싸피만의 공간, 들어 보셨나요?`}
        theme={theme}
      />
      {detailData.map(({ ...data }, idx) => (
        <LandingDetailSection theme={theme} key={idx} {...data} />
      ))}
      <LandingCTASection text="지금 시작해보세요" isButton theme={theme} />
      <ScrollTopBox>
        <ScrollTopButton
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          theme={theme}
        />
      </ScrollTopBox>
    </>
  );
};

export default LandingPage;

const detailData = [
  {
    highlight: "취업정보",
    title: "맞춤형 채용공고 \n 모아보기",
    description:
      "원하는 채용 공고를 찾기 어려우셨나요? \n 꼭 맞는 직군, 기술스택의 공고들을 ssafé에서 모아드릴게요.",
    src: "/images/mockup-job.webp",
    mode: "default",
  },
  {
    highlight: "스터디",
    title: "같이 준비하면 \n 취업도 어렵지 않아요",
    description:
      "특정 회사를 목표로 하는 스터디를 꾸릴 수 있어요. \n동료를 구하고, 같은 목표를 향해 함께 달려보세요.",
    src: "/images/mockup-study.webp",
    mode: "background",
  },
  {
    highlight: "커뮤니티",
    title: "더 자유롭게 \n 소통하세요",
    description:
      "수료를 하고, 취업을 해도 끊어지지 않아요. \n 다른 지역, 기수와도 만날 수 있어요.",
    src: "/images/mockup-community.webp",
    mode: "default",
  },
  {
    highlight: "인증 시스템",
    title: "싸피만의 \n 공간을 위해",
    description:
      "SSAFY 출신 교육생, 수료생만 이용할 수 있도록 \n 인증 시스템을 마련했어요. \n\n 우리만의 네트워크를 형성하고 계속 이어가보세요.",
    src: "/images/mockup-auth.webp",
    mode: "background",
  },
];

const ScrollTopBox = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 999;
`;
