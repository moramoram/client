import React, { useEffect, useRef, useCallback } from "react";

import { useRecoilState } from "recoil";
import { modalState } from "@/recoil";

import { AuthWait } from "@/containers/MyPage";
import { Overlay, ModalBox, Layout } from "./AuthModal.styled";

const AuthModal = ({ ...props }) => {
  const [isModalOpened, setIsModalOpened] = useRecoilState(modalState);
  const modal = useRef();

  const handleClose = useCallback(() => {
    setIsModalOpened(null);
  }, [setIsModalOpened]);

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
          <AuthWait />
        </Layout>
      </ModalBox>
    </>
  );
};

export default AuthModal;
