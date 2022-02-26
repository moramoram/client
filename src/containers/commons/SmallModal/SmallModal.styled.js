import styled from "styled-components";
import { Typography } from "@/foundations";
import { animations, colors, shadows } from "@/_shared";

const bgColor = {
  dark: colors.black,
  light: colors.white,
};

const textColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

export const Overlay = styled.div`
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

export const ModalBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
`;

export const Layout = styled.div`
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

export const CloseIconBox = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    width: 18px;
    stroke: ${colors.gray400};
    cursor: pointer;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.5rem;
`;

export const Title = styled(Typography)`
  text-align: center;
  color: ${(props) => textColor[props.theme]};

  white-space: pre-wrap;
`;

export const Description = styled(Typography)`
  color: ${colors.gray500};
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;
