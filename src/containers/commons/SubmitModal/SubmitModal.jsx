import React, { useEffect, useRef, useCallback } from "react";

import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { submitModalState } from "@/recoil";
import { getRefreshToken } from "@/api";

import {
  Overlay,
  ModalBox,
  Layout,
  CloseIconBox,
  ContentBox,
  Title,
  Description,
  ButtonBox,
} from "./SubmitModal.styled";
import { Button } from "@/components";
import { Icon } from "@/foundations";

const SubmitModal = ({ ...props }) => {
  const [isModalOpened, setIsModalOpened] = useRecoilState(submitModalState);
  // const resetAuth = useResetRecoilState(auth);

  const modal = useRef();
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    setIsModalOpened(null);
  }, [setIsModalOpened]);

  const handleOnSubmit = useCallback(() => {
    setIsModalOpened(null);
    getRefreshToken();
    navigate("/main");
  }, [setIsModalOpened, navigate]);

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

  return (
    <>
      <Overlay />
      <ModalBox>
        <Layout ref={modal} {...props}>
          <CloseIconBox onClick={handleOnSubmit}>
            <Icon icon="x" />
          </CloseIconBox>
          <ContentBox>
            <Title type="h4" {...props}>
              인증 요청을 완료했어요!
            </Title>
            <Description type="paragraph">
              승인 여부는 알림 메세지로 보내드릴게요.
            </Description>
          </ContentBox>
          <ButtonBox>
            <Button
              mode="primary"
              width="200"
              onClick={handleOnSubmit}
              {...props}
            >
              네! 알겠습니다.
            </Button>
          </ButtonBox>
        </Layout>
      </ModalBox>
    </>
  );
};

export default SubmitModal;
