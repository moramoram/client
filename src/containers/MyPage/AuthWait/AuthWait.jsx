import React, { useState } from "react";

import { useSetRecoilState } from "recoil";
import { modalState } from "@/recoil";

import {
  CloseIconBox,
  ContentBox,
  LogoBox,
  TextBox,
  Title,
  SubTitle,
  ButtonLink,
  AskingForHelp,
  Link,
} from "./AuthWait.styled";
import { Icon, Logo } from "@/foundations";
import { Button } from "@/components";
import { DeleteAccountModal } from "@/containers";

const AuthWait = ({ ...props }) => {
  const setIsModalOpened = useSetRecoilState(modalState);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <CloseIconBox>
        <Icon icon="x" onClick={() => setIsModalOpened(false)} />
      </CloseIconBox>
      <ContentBox>
        <LogoBox>
          <Logo width="80" height="20" />
        </LogoBox>
        <TextBox>
          <Title type="h2">아직 인증이 완료되지 않았어요.</Title>
          <SubTitle type="paragraph">
            {`관리자가 열심히 확인중이에요. \n 조금만 더 기다려주세요!`}
          </SubTitle>
        </TextBox>
        <ButtonLink href="/main">
          <Button>메인으로 돌아가기</Button>
        </ButtonLink>
        <Link
          href="https://github.com/moramoram/ssafe-service/discussions/categories/q-a"
          target="_blank"
        >
          <AskingForHelp>도움이 필요하신가요?</AskingForHelp>
        </Link>
        <AskingForHelp onClick={openModal}>탈퇴하고 싶어요</AskingForHelp>
        <DeleteAccountModal showModal={true} setShowModal={setShowModal} />
      </ContentBox>
    </>
  );
};

export default AuthWait;
