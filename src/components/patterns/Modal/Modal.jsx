import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Button } from "@/components";
import { Icon, Typography } from "@/foundations";
import { colors, shadows } from "@/_shared";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const Modal = ({ title, description, secondary, primary, ...props }) => {
  return (
    <>
      <Overlay />
      <ModalBox>
        <Layout {...props}>
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
            <Button mode="secondary" {...props}>
              {secondary}
            </Button>
            <Button mode="primary" {...props}>
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
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(15px);
`;

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  top: 50%;

  width: 360px;
  max-width: 480px;
  margin: auto;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: ${shadows.base};

  background-color: ${(props) => bgColor[props.theme]};
  transform: translateY(-50%);
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
`;

const Title = styled(Typography)`
  color: ${(props) => textColor[props.theme]};
`;

const Description = styled(Typography)`
  color: ${colors.gray500};
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 1rem;
`;

export default Modal;
