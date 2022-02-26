import React, { useEffect, useRef, useCallback } from "react";

import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { smallModalState } from "@/recoil";

import {
  Overlay,
  ModalBox,
  Layout,
  CloseIconBox,
  ContentBox,
  Title,
  Description,
  ButtonBox,
} from "./SmallModal.styled";
import { Button } from "@/components";
import { Icon } from "@/foundations";

const SmallModal = ({ ...props }) => {
  const [isModalOpened, setIsModalOpened] = useRecoilState(smallModalState);
  const modal = useRef();
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    setIsModalOpened(null);
  }, [setIsModalOpened]);

  const handleOnSubmit = useCallback(() => {
    setIsModalOpened(null);
    navigate("/mypage");
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
          <CloseIconBox onClick={handleClose}>
            <Icon icon="x" />
          </CloseIconBox>
          <ContentBox>
            <Title type="h4" {...props}>
              {"추가 정보를 입력하면 \n 모든 서비스를 이용할 수 있어요."}
            </Title>
            <Description type="paragraph"></Description>
          </ContentBox>
          <ButtonBox>
            <Button
              mode="secondary"
              width="200"
              onClick={handleClose}
              {...props}
            >
              사양할게요
            </Button>
            <Button
              mode="primary"
              width="200"
              onClick={handleOnSubmit}
              {...props}
            >
              네! 지금 할게요.
            </Button>
          </ButtonBox>
        </Layout>
      </ModalBox>
    </>
  );
};

export default SmallModal;
