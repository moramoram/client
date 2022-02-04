import React, { useRef, useCallback } from "react";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { createModalState } from "@/recoil/modal";

import { CommunityEditor } from "@/containers/";
import { Button } from "@/components";
import { Icon } from "@/foundations";
import { colors, animations } from "@/_shared";

const CommunityCreate = ({ children, ...props }) => {
  const [isCreateOpened, setIsCreateOpened] = useRecoilState(createModalState);
  const modal = useRef();

  console.log(isCreateOpened);

  const handleClose = useCallback(() => {
    if (window.confirm("지금 나가시면 저장되지 않아요!")) {
      setIsCreateOpened(false);
    }
  }, [setIsCreateOpened]);

  return (
    <>
      <Overlay />
      <ModalBox>
        <IconBox>
          <Icon icon="x" onClick={() => handleClose()} />
        </IconBox>
        <Layout ref={modal} {...props}>
          <ContentBox>
            <CommunityEditor {...props} />
          </ContentBox>
        </Layout>
      </ModalBox>
      <ButtonBox {...props}>
        <Button mode="secondary" onClick={() => handleClose()} {...props}>
          취소
        </Button>
        <Button mode="primary" {...props}>
          완료
        </Button>
      </ButtonBox>
    </>
  );
};

export default CommunityCreate;

const bgColor = {
  light: colors.white,
  dark: colors.black,
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;

  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  animation: ${animations.appear} 0.3s cubic-bezier(0.3, 0, 0, 1);
`;

const ModalBox = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10000;

  height: calc(100% - 154px);
  animation: ${animations.modal} 0.3s cubic-bezier(0.3, 0, 0, 1);
`;

const IconBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 12px;

  svg {
    color: white;
  }
`;

const Layout = styled.div`
  display: flex;
  overflow-y: auto;
  position: relative;

  height: 100%;
  padding: 1rem;
  border-radius: 12px 12px 0 0;

  background-color: ${(props) => bgColor[props.theme]};
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 10001;

  width: 100%;
  padding: 1rem;
  background-color: ${(props) => bgColor[props.theme]};
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 4rem;
`;