import React from "react";
import styled from "styled-components";

import { Button } from "@/components";
import { Logo } from "@/foundations";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const AuthComplete = ({ ...props }) => {
  return (
    <Layout>
      <LogoBox>
        <Logo width="80" height="20" {...props} />
      </LogoBox>
      <Title {...props}>인증이 완료되었습니다</Title>
      <SubTitle {...props}>
        {`많은 싸피인들을 만나보세요. \n 더 자유롭고 쉽게 소통하세요!`}
      </SubTitle>

      <ButtonLink href="/main">
        <Button>메인으로 돌아가기</Button>
      </ButtonLink>
      <Link
        href="https://github.com/moramoram/ssafe-service/discussions/categories/q-a"
        target="_blank"
      >
        <AskingForHelp>도움이 필요하신가요?</AskingForHelp>
      </Link>
    </Layout>
  );
};

export default AuthComplete;

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
  width: 100%;
  padding-top: 86px;
`;

const LogoBox = styled.div`
  padding-bottom: 1rem;
`;

const Title = styled.div`
  line-height: ${lineHeight.h2};
  margin-bottom: 2rem;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => titleColor[props.theme]};
`;

const SubTitle = styled.div`
  margin-bottom: 6rem;

  color: ${(props) => subtitleColor[props.theme]};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};

  white-space: pre-line;
`;

const ButtonLink = styled.a`
  text-decoration: none;
  margin-bottom: 2rem;
`;

const Link = styled.a`
  text-decoration: none;
`;

const AskingForHelp = styled.span`
  color: ${colors.blue100};
  font-weight: ${fontWeight.bold};
  cursor: pointer;

  :hover {
    color: ${colors.blue200};
  }
`;
