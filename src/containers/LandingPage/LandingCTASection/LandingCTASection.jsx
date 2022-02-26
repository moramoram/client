import React from "react";

import { useSetRecoilState } from "recoil";
import { loginModalState } from "@/recoil";

import {
  Layout,
  ContentBox,
  Text,
  GetStartedBtn,
} from "./LandingCTASection.styled";

const LandingCTASection = ({ text, isButton, ...props }) => {
  const setLoginModalOpen = useSetRecoilState(loginModalState);
  return (
    <Layout isButton={isButton} {...props}>
      <ContentBox>
        <Text {...props}>{text}</Text>
        {isButton && (
          <GetStartedBtn onClick={() => setLoginModalOpen(true)}>
            시작하기
          </GetStartedBtn>
        )}
      </ContentBox>
    </Layout>
  );
};

export default LandingCTASection;
