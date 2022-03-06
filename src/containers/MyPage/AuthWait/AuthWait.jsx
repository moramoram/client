import React, { useState } from "react";
import styled from "styled-components";

import { Icon, Logo, Typography } from "@/foundations";
import { Button } from "@/components";
import { colors, fontWeight } from "@/_shared";
import { useSetRecoilState } from "recoil";
import { modalState } from "@/recoil";
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
        <DeleteAccountModal showModal={showModal} setShowModal={setShowModal} />
      </ContentBox>
    </>
  );
};

export default AuthWait;

const LogoBox = styled.div``;

const CloseIconBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;

  svg {
    width: 18px;
    stroke: ${colors.gray500};
    cursor: pointer;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 40px;
  gap: 30px;
`;

const TextBox = styled.div`
  margin-bottom: 40px;
`;

const Title = styled(Typography)`
  color: ${colors.gray900};
  text-align: left;
  white-space: pre-line;
  margin-bottom: 28px;
`;

const SubTitle = styled(Typography)`
  color: ${colors.gray400};
  text-align: left;
  white-space: pre-line;
`;

const ButtonLink = styled.a`
  text-decoration: none;
`;

const AskingForHelp = styled.div`
  color: ${colors.blue100};
  font-weight: ${fontWeight.bold};
  cursor: pointer;
`;

const Link = styled.a`
  text-decoration: none;
`;
