import styled from "styled-components";
import { colors, animations } from "@/_shared";

const bgColor = {
  light: colors.white,
  dark: colors.black,
};

export const Overlay = styled.div`
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

export const ModalBox = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10000;

  height: calc(100% - 154px);
  animation: ${animations.modal} 0.3s cubic-bezier(0.3, 0, 0, 1);
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 12px;

  svg {
    color: white;
  }
`;

export const Layout = styled.div`
  display: flex;
  overflow-y: auto;
  position: relative;

  height: 100%;
  padding: 1rem;
  border-radius: 12px 12px 0 0;

  background-color: ${(props) => bgColor[props.theme]};
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 10001;

  width: 100%;
  padding: 2rem;
  background-color: ${(props) => bgColor[props.theme]};
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 4rem;
`;
