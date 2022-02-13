import React from "react";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import {
  LandingHero,
  LandingDetailSection,
  LandingCTASection,
  ErrorBoundary,
} from "@/containers";

const LandingPage = () => {
  const theme = useRecoilValue(themeState);

  return (
    <ErrorBoundary fallback={<div />}>
      <LandingHero theme={theme} />
      <LandingDetailSection
        theme={theme}
        highlight="취업정보"
        title={["맞춤형 채용공고", <br />, "모아보기"]}
        description={[
          "원하는 채용 공고를 찾기 어려우셨나요?",
          <br />,
          "꼭 맞는 직군, 기술스택의 공고들을 ssafé에서 모아드릴게요.",
        ]}
        src="https://i.imgur.com/g9jF96l.png"
      />
      <LandingDetailSection
        theme={theme}
        highlight="스터디"
        title={["같이 준비하면", <br />, "취업도 어렵지 않아요"]}
        description={[
          "특정 회사를 목표로 하는 스터디를 꾸릴 수 있어요.",
          <br />,
          "동료를 구하고, 같은 목표를 향해 함께 달려보세요.",
        ]}
        src="https://i.imgur.com/4SVCXRN.png"
        mode="background"
      />
      <LandingDetailSection
        theme={theme}
        highlight="커뮤니티"
        title={["더 자유롭게", <br />, "소통하세요"]}
        description={[
          "수료를 하고, 취업을 해도 끊어지지 않아요.",
          <br />,
          "다른 지역, 기수와도 만날 수 있어요.",
        ]}
        src="https://i.imgur.com/bomEK3n.png"
      />
      <LandingDetailSection
        theme={theme}
        highlight="인증 시스템"
        title={["싸피만의", <br />, "공간을 위해"]}
        description={[
          "SSAFY 출신 교육생, 수료생만 이용할 수 있도록",
          <br />,
          "인증 시스템을 마련했어요",
          <br />,
          <br />,
          "우리만의 네트워크를 형성하고 계속 이어가보세요.",
        ]}
        src="https://i.imgur.com/se5qZo8.png"
        mode="background"
      />
      <LandingCTASection text="지금 시작해보세요" theme={theme} />
    </ErrorBoundary>
  );
};

export default LandingPage;
