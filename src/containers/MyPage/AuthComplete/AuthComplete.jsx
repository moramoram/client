import React from "react";

import {
  Layout,
  LogoBox,
  Title,
  SubTitle,
  ButtonLink,
  Link,
  AskingForHelp,
} from "./AuthComplete.styled";
import { Button } from "@/components";
import { Logo } from "@/foundations";

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
