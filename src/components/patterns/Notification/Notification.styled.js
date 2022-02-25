import styled from "styled-components";
import { colors, shadows, animations, fontWeight, fontSize } from "@/_shared";

const borderColor = {
  dark: colors.gray800,
  light: colors.gray100,
};

const bgColor = {
  dark: colors.gray900,
  light: colors.white,
};

const boxShadow = {
  dark: "2px 2px 4px rgba(0, 0, 0, 0.185)",
  light: shadows.base,
};

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 300px;

  padding-bottom: 0.5rem;
  border-radius: 8px;
  border: 1px solid ${(props) => borderColor[props.theme]};

  overflow: hidden;
  background-color: ${(props) => bgColor[props.theme]};
  box-shadow: ${(props) => boxShadow[props.theme]};

  animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
  z-index: 99999;

  @media screen and (max-width: 980px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    border-radius: 0;
  }
`;

export const CloseIconBox = styled.div`
  display: flex;
  padding: 1rem;

  svg {
    width: 24px;
    stroke: ${colors.gray500};
    cursor: pointer;
  }
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Title = styled.div`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.lg};
  color: ${(props) => titleColor[props.theme]};
  user-select: none;
`;

export const DeleteAll = styled.div`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.xs};
  color: ${colors.blue100};
  user-select: none;
`;

export const MenuBox = styled.div`
  padding: 4px 0;
  max-height: 500px;
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  > div {
    justify-content: center;
  }
`;

export const EmptyBox = styled.div`
  display: flex;
  padding: 1.5rem 0 3rem 0;

  width: 100%;
  min-width: 300px;

  color: ${colors.gray500};
  user-select: none;
`;
