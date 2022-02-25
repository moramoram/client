import React from "react";

import {
  Overlay,
  ModalBox,
  Layout,
  CloseIconBox,
  ContentBox,
  Title,
  ButtonBox,
  Button,
  AskingForHelp,
} from "./SignUpModal.styled";
import { Icon, IconSocial, Typography } from "@/foundations";

const SignUpModal = ({ ...props }) => {
  return (
    <>
      <Overlay />
      <ModalBox>
        <Layout {...props}>
          <CloseIconBox>
            <Icon icon="x" />
          </CloseIconBox>
          <ContentBox>
            <Title type="h2" {...props}>
              {"개발자 계정으로 \n간편하게 시작하기"}
            </Title>
            <ButtonBox>
              <Button className="google">
                <IconSocial icon="google" />
                <Typography type="button">Google 계정으로 로그인</Typography>
              </Button>

              <Button className="github">
                <IconSocial icon="github" />
                <Typography type="button">Github 계정으로 로그인</Typography>
              </Button>
            </ButtonBox>
            <AskingForHelp>도움이 필요하신가요?</AskingForHelp>
          </ContentBox>
        </Layout>
      </ModalBox>
    </>
  );
};

export default SignUpModal;
