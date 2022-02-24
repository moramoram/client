import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { modalState } from "@/recoil";

import { AuthWait } from "@/containers";
import { animations, colors, shadows } from "@/_shared";

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
    height: 100vh;
    border-radius: 0;
  }
`;
