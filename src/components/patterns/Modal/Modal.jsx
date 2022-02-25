import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { useRecoilState } from "recoil";
import { modalState } from "@/recoil/modal";

import {
  Overlay,
  ModalBox,
  Layout,
  CloseIconBox,
  ContentBox,
  Title,
  Description,
  ButtonBox,
} from "./Modal.styled";
import { Button } from "@/components";
import { Icon } from "@/foundations";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const Modal = ({
  title,
  description,
  secondary,
  primary,
  onClickPrimary,
  onClickSecondary,
  ...props
}) => {
  const [isModalOpened, setIsModalOpened] = useRecoilState(modalState);
  const modal = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isModalOpened && !modal?.current.contains(event.target)) {
        setIsModalOpened(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isModalOpened, setIsModalOpened]);

  return (
    <>
      <Overlay />
      <ModalBox>
        <Layout ref={modal} {...props}>
          <CloseIconBox>
            <Icon icon="x" />
          </CloseIconBox>
          <ContentBox>
            <Title type="h4" {...props}>
              {title}
            </Title>
            <Description type="paragraph">{description}</Description>
          </ContentBox>
          <ButtonBox>
            <Button
              mode="secondary"
              width="200"
              onClick={onClickPrimary}
              {...props}
            >
              {secondary}
            </Button>
            <Button
              mode="primary"
              width="200"
              onClick={onClickSecondary}
              {...props}
            >
              {primary}
            </Button>
          </ButtonBox>
        </Layout>
      </ModalBox>
    </>
  );
};

Modal.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  title: PropTypes.node,
  description: PropTypes.node,
};

Modal.defaultProps = {
  title: "Job.ssafy로 연결됩니다",
  description: "연결시 Web DRM이 켜집니다.",
  secondary: "사양할게요",
  primary: "네! 들어갈게요",
  theme: THEME.LIGHT,
};

export default Modal;
