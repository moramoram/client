import React from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { Avatar } from "@/components";
import { colors, fontSize, fontWeight, lineHeight } from "@/_shared";

const MadeByPage = () => {
  const theme = useRecoilValue(themeState);
  return (
    <Layout>
      <ContentBox>
        <Highlight>만든 사람</Highlight>
        <Title theme={theme}>모람모람</Title>
        <UsersBox>
          <HyperLink href="https://github.com/jhj0602" target="_blank">
            <UserBox>
              <Avatar size="extraLarge" src="/images/Hyoungjun.svg" />
              <UserName theme={theme}>진형준</UserName>
              <Description>Backend | Leader</Description>
            </UserBox>
          </HyperLink>
          <HyperLink href="https://github.com/wangsuuu" target="_blank">
            <UserBox>
              <Avatar size="extraLarge" src="/images/Suruen.svg" />
              <UserName theme={theme}>왕수련</UserName>
              <Description>Backend</Description>
            </UserBox>
          </HyperLink>
        </UsersBox>
        <UsersBox>
          <HyperLink href="https://github.com/devpla" target="_blank">
            <UserBox>
              <Avatar size="extraLarge" src="/images/Yeonhee.svg" />
              <UserName theme={theme}>채연희</UserName>
              <Description>Frontend | Design</Description>
            </UserBox>
          </HyperLink>
          <HyperLink href="https://github.com/SonSangjoon" target="_blank">
            <UserBox>
              <Avatar size="extraLarge" src="/images/Sangjoon.svg" />
              <UserName theme={theme}>손상준</UserName>
              <Description>Frontend</Description>
            </UserBox>
          </HyperLink>
          <HyperLink href="https://github.com/yewonniii" target="_blank">
            <UserBox>
              <Avatar size="extraLarge" src="/images/Yewon.svg" />
              <UserName theme={theme}>이예원</UserName>
              <Description>Frontend</Description>
            </UserBox>
          </HyperLink>
        </UsersBox>
      </ContentBox>
    </Layout>
  );
};

export default MadeByPage;

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const nameColor = {
  light: colors.gray700,
  dark: colors.gray300,
};

const Layout = styled.div`
  padding: 12rem 0 8rem 0;
  height: 100vh;

  @media screen and (max-width: 482px) {
    margin-bottom: 50rem;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 960px;
  margin: auto;
`;

const Highlight = styled.div`
  margin-bottom: 8px;
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  color: ${colors.blue100};
`;

const Title = styled.div`
  color: ${(props) => titleColor[props.theme]};
  font-size: ${fontSize.h2};
  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};
  padding-bottom: 2rem;
`;

const UsersBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;

  margin-top: 2rem;
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  padding: 1rem;
`;

const UserName = styled.div`
  margin-top: 1rem;
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.bold};
  color: ${(props) => nameColor[props.theme]};
`;

const Description = styled.div`
  font-size: ${fontSize.sm};
  color: ${colors.gray500};
`;

const HyperLink = styled.a`
  text-decoration: none;
`;
