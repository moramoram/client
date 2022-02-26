import React from "react";

import { useSetRecoilState } from "recoil";
import { loginModalState } from "@/recoil";

import {
  Layout,
  ContentBox,
  Title,
  Cursor,
  GetStartedBtn,
  ScrollSection,
} from "./LandingHero.styled";
import { AutoTyping } from "@/components";
import { Icon } from "@/foundations";

const LandingHero = ({ ...props }) => {
  const setLoginModalOpen = useSetRecoilState(loginModalState);

  return (
    <>
      <Layout>
        <ContentBox>
          <Title {...props}>
            당신이 찾던 <br />
            싸피만의{" "}
            <AutoTyping
              active
              arrayRef={["커뮤니티", "스터디", "취업정보"]}
              delayToWrite={1000}
              delayToDelete={3000}
              writeInterval={40}
              deleteInterval={40}
            />
            <Cursor active blinkSpeed={500} />
          </Title>
          <GetStartedBtn onClick={() => setLoginModalOpen(true)}>
            시작하기
          </GetStartedBtn>
        </ContentBox>
        <ScrollSection>
          스크롤을 내려보세요
          <Icon icon="chevronDown" />
        </ScrollSection>
      </Layout>
    </>
  );
};

export default LandingHero;
