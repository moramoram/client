import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { loginModalState } from "@/recoil";

import { Icon, IconSocial, Typography } from "@/foundations";
import { animations, colors, fontWeight, shadows } from "@/_shared";

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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;

  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(15px);

  animation: ${animations.appear} 0.3s cubic-bezier(0.3, 0, 0, 1);
`;

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  position: relative;
  top: 50%;

  width: 500px;
  height: 600px;
  margin: auto;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: ${shadows.base};

  background-color: ${colors.white};
  transform: translateY(-50%);
  animation: ${animations.modal} 0.4s cubic-bezier(0.3, 0, 0, 1);

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

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
  align-items: center;
  gap: 4rem;
  padding-top: 3rem;
`;

const Title = styled(Typography)`
  color: ${colors.gray900};
  text-align: center;
  white-space: pre-line;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;

  .google {
    background-color: ${colors.gray25};
    color: ${colors.gray600};
    transition: 0.3s;

    :hover {
      background-color: ${colors.gray50};
    }
  }

  .github {
    background-color: black;
    color: ${colors.white};
    transition: 0.3s;

    :hover {
      background-color: ${colors.black};
    }

    path {
      fill: white;
    }
  }
`;

const ButtonLink = styled.a`
  text-decoration: none;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 1rem 2.2rem;
  border-radius: 8px;
  border: 0px solid;

  box-shadow: ${shadows.base};
  cursor: pointer;

  white-space: nowrap;
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
