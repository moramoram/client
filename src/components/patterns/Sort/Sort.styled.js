import styled from "styled-components";
import { colors, fontSize, animations } from "@/_shared";

export const Layout = styled.div`
  display: flex;
  position: relative;

  .dropdown {
    top: 2rem;
    left: -1.4rem;
    z-index: 9999;
    animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.gray500};

  cursor: pointer;
`;

export const Text = styled.div`
  width: 100%;
  margin-left: 8px;

  font-size: ${fontSize.sm};
  color: ${colors.gray500};

  user-select: none;
`;
