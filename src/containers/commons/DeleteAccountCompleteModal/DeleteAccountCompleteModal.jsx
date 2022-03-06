import React, { useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useResetRecoilState } from "recoil";
import { token } from "@/recoil";

import { useMutation } from "react-query";
import { DeleteUser } from "@/api";

import { Logo, Icon } from "@/foundations";
import { Button } from "@/components";
import {
  Overlay,
  ModalBox,
  Layout,
  CloseIconBox,
  ContentBox,
  Title,
  ButtonBox,
  LogoBox,
} from "./DeleteAccountCompleteModal.styled";

const DeleteAccountCompleteModal = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const resetToken = useResetRecoilState(token);
  const modalRef = useRef();

  const deleteUserMutation = useMutation(DeleteUser, {
    onSuccess: () => {
      resetToken();
    },
  });

  const deleteComplete = useCallback(() => {
    deleteUserMutation.mutate();
    navigate("/");
  }, [navigate, deleteUserMutation]);

  const handleClose = useCallback(() => {
    setShowModal(null);
  }, [setShowModal]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showModal && !modalRef?.current.contains(event.target)) {
        deleteComplete();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [showModal, deleteComplete, handleClose]);

  return (
    <>
      {showModal ? (
        <div>
          <Overlay />
          <ModalBox>
            <Layout ref={modalRef}>
              <CloseIconBox>
                <Icon icon="x" onClick={deleteComplete} />
              </CloseIconBox>
              <ContentBox>
                <LogoBox>
                  <Logo width="80" height="20" />
                </LogoBox>
                <Title type="h2">탈퇴가 완료되었습니다</Title>
                <Title type="h4">
                  {`그동안 저희 서비스를 이용해 주셔서 감사합니다. \n 다시 만나길 바라요!`}
                </Title>
                <ButtonBox>
                  <Button mode="primary" width="200" onClick={deleteComplete}>
                    메인으로 돌아가기
                  </Button>
                </ButtonBox>
              </ContentBox>
            </Layout>
          </ModalBox>
        </div>
      ) : null}
    </>
  );
};

export default DeleteAccountCompleteModal;
