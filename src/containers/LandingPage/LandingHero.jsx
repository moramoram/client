import React from "react";
import styled from "styled-components";

import { AutoTyping, BlinkCursor, Three } from "@/components";
import { colors, fontSize, fontWeight } from "@/_shared";

const LandingHero = ({ ...props }) => {
  return (
    <>
      <Layout>
        <ThreeBox>
          <Three {...props} />
        </ThreeBox>
        <ContentBox>
          <Title {...props}>
            당신이 찾던 <br />
            싸피만의{" "}
            <AutoTyping
              active
              arrayRef={["커뮤니티", "스터디", "채용정보"]}
              delayToWrite={2000}
              delayToDelete={3000}
            />
            <Cursor active blinkSpeed={500} />
          </Title>
          <GetStartedBtn>시작하기</GetStartedBtn>
        </ContentBox>
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
  position: relative;
  max-width: 1280px;
  height: 100vh;
  margin: auto;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 240px 0 0 0;
  z-index: 2;
`;

const Title = styled.h1`
  margin-bottom: 6rem;
  font-size: calc(62rem / 16);
  font-weight: ${fontWeight.bold};
  color: ${(props) => titleColor[props.theme]};
  line-height: calc(80 / 62);
`;

const Cursor = styled(BlinkCursor)`
  color: ${colors.blueOpacity300};
  font-size: calc(68rem / 16);
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
`;

const ThreeBox = styled.div`
  position: absolute;
  right: 0;
  padding: 100px 0 0 0;
  z-index: 1;
`;
