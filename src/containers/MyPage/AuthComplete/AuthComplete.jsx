import React from "react";
import styled from "styled-components";

import { Icon, Logo, Typography } from "@/foundations";
import { Button } from "@/components";
import { colors } from "@/_shared";
import { useSetRecoilState } from "recoil";
import { modalState } from "@/recoil";

const AuthComplete = ({ ...props }) => {
  const setIsModalOpened = useSetRecoilState(modalState);

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
          <Title type="h2" {...props}>
            인증이 완료되었습니다.
          </Title>
          <SubTitle {...props} type="paragraph">
            {`많은 싸피인들을 만나보세요. \n 더 자유롭고 쉽게 소통하세요!`}
          </SubTitle>
        </TextBox>
        <ButtonLink href="/main">
          <Button>메인으로 돌아가기</Button>
        </ButtonLink>
        <QuitText>탈퇴하기</QuitText>
      </ContentBox>
    </>
  );
};

export default AuthComplete;

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

const QuitText = styled.div`
  color: ${colors.gray500};

  cursor: pointer;
`;
