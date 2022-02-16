import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { smallModalState } from "@/recoil";

import { Button } from "@/components";
import { Icon, Typography } from "@/foundations";

import { animations, colors, shadows } from "@/_shared";

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

const bgColor = {
  dark: colors.black,
  light: colors.white,
};

const textColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

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

  max-width: 480px;
  margin: auto;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: ${shadows.base};

  transform: translateY(-50%);
  background-color: ${(props) => bgColor[props.theme]};

  animation: ${animations.modal} 0.4s cubic-bezier(0.3, 0, 0, 1);
`;

const CloseIconBox = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    width: 18px;
    stroke: ${colors.gray400};
    cursor: pointer;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.5rem;
`;

const Title = styled(Typography)`
  text-align: center;
  color: ${(props) => textColor[props.theme]};

  white-space: pre-wrap;
`;

const Description = styled(Typography)`
  color: ${colors.gray500};
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;
