import React, { useEffect, useRef, useCallback } from "react";

import { useRecoilState } from "recoil";
import { loginModalState } from "@/recoil";

import {
  Overlay,
  ModalBox,
  Layout,
  CloseIconBox,
  ContentBox,
  Title,
  ButtonBox,
  ButtonLink,
  Button,
  Link,
  AskingForHelp,
} from "./SignUpModal.styled";
import { Icon, IconSocial, Typography } from "@/foundations";

const SignUpModal = ({ ...props }) => {
  const [isModalOpened, setIsModalOpened] = useRecoilState(loginModalState);
  const modal = useRef();
  const handleClose = useCallback(() => {
    setIsModalOpened(null);
  }, [setIsModalOpened]);

  const codeRequestURI = {
    google: `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_GOOGLE_LOGIN_REDIRECT_URI}&access_type=offline`,
    github: `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GITHUB_LOGIN_REDIRECT_URI}`,
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isModalOpened && !modal?.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isModalOpened, handleClose]);

  const titleMessage = {
    login: "다시 오신 것을 \n환영해요!",
    signup: "개발자 계정으로 \n간편하게 시작하기",
    require: "계속하려면 \n로그인이 필요해요",
  };

  return (
    <>
      <Overlay />
      <ModalBox>
        <Layout ref={modal} {...props}>
          <CloseIconBox>
            <Icon icon="x" onClick={() => setIsModalOpened(false)} />
          </CloseIconBox>
          <ContentBox>
            <Title type="h2" {...props}>
              {titleMessage[isModalOpened] ??
                "개발자 계정으로 \n간편하게 시작하기"}
            </Title>
            <ButtonBox>
              <ButtonLink href={codeRequestURI["google"]}>
                <Button className="google">
                  <IconSocial icon="google" />
                  <Typography type="button">Google 계정으로 로그인</Typography>
                </Button>
              </ButtonLink>
              <ButtonLink href={codeRequestURI["github"]}>
                <Button className="github">
                  <IconSocial icon="github" />
                  <Typography type="button">Github 계정으로 로그인</Typography>
                </Button>
              </ButtonLink>
            </ButtonBox>
            <Link
              href="https://github.com/moramoram/ssafe-service/discussions/categories/q-a"
              target="_blank"
            >
              <AskingForHelp>도움이 필요하신가요?</AskingForHelp>
            </Link>
          </ContentBox>
        </Layout>
      </ModalBox>
    </>
  );
};

export default SignUpModal;
