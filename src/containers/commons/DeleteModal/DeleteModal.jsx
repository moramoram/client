import React, { useEffect, useRef, useCallback } from "react";

import { useRecoilState } from "recoil";
import { deleteModalState } from "@/recoil";

import {
  Overlay,
  ModalBox,
  Layout,
  CloseIconBox,
  ContentBox,
  Title,
  Description,
  ButtonBox,
} from "./DeleteModal.styled";
import { Button } from "@/components";
import { Icon } from "@/foundations";

const DeleteModal = ({ ...props }) => {
  const [isModalOpened, setIsModalOpened] = useRecoilState(deleteModalState);
  const modal = useRef();

  const handleClose = useCallback(() => {
    setIsModalOpened(null);
  }, [setIsModalOpened]);

  // const handleOnSubmit = useCallback(() => {
  //   setIsModalOpened(null);
  // }, [setIsModalOpened]);

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
              {/* {"댓글을 삭제하시면 되돌릴 수 없어요.\n 정말 삭제하실건가요?"} */}
            </Title>
            <Description type="paragraph"></Description>
          </ContentBox>
          <ButtonBox>
            {/* <Button
              mode="secondary"
              width="200"
              onClick={handleClose}
              {...props}
            >
              아니요!
            </Button> */}
            <Button
              mode="primary"
              width="200"
              // onClick={handleOnSubmit}
              onClick={handleClose}
              {...props}
            >
              {/* 네! 삭제할래요 */}
              돌아가기
            </Button>
          </ButtonBox>
        </Layout>
      </ModalBox>
    </>
  );
};

export default DeleteModal;
