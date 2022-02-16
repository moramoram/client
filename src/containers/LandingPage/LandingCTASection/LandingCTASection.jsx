import React from "react";
import styled from "styled-components";

import { useSetRecoilState } from "recoil";
import { loginModalState } from "@/recoil";

import { colors, fontSize, fontWeight, lineHeight } from "@/_shared";

const LandingCTASection = ({ text, ...props }) => {
  const setLoginModalOpen = useSetRecoilState(loginModalState);

  return (
    <Layout {...props}>
      <ContentBox>
        <Text {...props}>{text}</Text>
        <GetStartedBtn onClick={() => setLoginModalOpen(true)}>
          시작하기
        </GetStartedBtn>
      </ContentBox>
    </Layout>
  );
};

export default LandingCTASection;

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const Layout = styled.div`
  padding: 12rem 0 8rem 0;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  max-width: 960px;
  margin: auto;
`;

const Text = styled.div`
  color: ${(props) => titleColor[props.theme]};
  font-size: ${fontSize.h2};
  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};
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
