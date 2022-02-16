import React from "react";
import styled from "styled-components";

import { useSetRecoilState } from "recoil";
import { loginModalState } from "@/recoil";

import { AutoTyping, BlinkCursor } from "@/components";
import { Icon } from "@/foundations";
import { colors, fontSize, fontWeight } from "@/_shared";

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

const titleColor = {
  light: colors.gray700,
  dark: colors.gray200,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  height: 100vh;
  margin: auto;

  background: url("/images/background.png");
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 240px 0 0 20px;
  z-index: 2;

  @media screen and (max-width: 530px) {
    padding: 180px 0 0 20px;
  }
`;

const Title = styled.h1`
  margin-bottom: 6rem;

  font-size: calc(62rem / 16);
  font-weight: ${fontWeight.bold};
  color: ${(props) => titleColor[props.theme]};
  text-align: center;
  line-height: calc(80 / 62);

  transition: 0.3s;

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.h2};
    line-height: calc(72 / 62);
  }
`;

const Cursor = styled(BlinkCursor)`
  color: ${colors.blueOpacity300};
  font-size: calc(68rem / 16);

  @media screen and (max-width: 530px) {
    font-size: calc(40rem / 16);
  }
`;

const GetStartedBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px 60px;
  border-radius: 32px;
  border: none;
  box-shadow: 0px 8px 15px rgba(74, 131, 239, 0.3);
  background: ${colors.blue100};

  color: ${colors.white};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.lg};
  text-align: center;
  text-decoration: none;

  transition: 0.2s;
  user-select: none;
  cursor: pointer;

  :hover {
    background: ${colors.blue200};
  }

  :active {
    background: ${colors.blue100};
  }

  @media screen and (max-width: 530px) {
    padding: 16px 40px;
    font-size: ${fontSize.p};
  }
`;

const ScrollSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  padding: 1rem;
  color: ${colors.gray500};

  @keyframes scrollAni {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  animation: scrollAni 1s infinite alternate;
`;
