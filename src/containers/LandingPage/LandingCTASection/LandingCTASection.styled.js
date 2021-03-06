import styled from "styled-components";
import { colors, fontSize, fontWeight, lineHeight } from "@/_shared";

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const bgColor = {
  light: colors.gray100,
  dark: colors.gray900,
};

export const Layout = styled.div`
  padding: 8rem 0;
  background-color: ${(props) => !props.isButton && bgColor[props.theme]};
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  max-width: 960px;
  margin: auto;
`;

export const Text = styled.div`
  color: ${(props) => titleColor[props.theme]};
  font-size: ${fontSize.h2};
  line-height: calc(${lineHeight.h2} + 1rem);
  font-weight: ${fontWeight.bold};

  text-align: center;
  white-space: pre-line;
  transition: 0.3s;

  @media screen and (max-width: 620px) {
    font-size: ${fontSize.h4};
    line-height: calc(${lineHeight.h3});
  }
`;

export const GetStartedBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px 60px;
  border-radius: 32px;
  border: none;
  box-shadow: 0px 8px 15px rgba(74, 131, 239, 0.3);
  background: ${colors.blue100};

  color: ${colors.white};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.lg};
  text-align: center;
  text-decoration: none;

  transition: 0.3s;
  user-select: none;
  cursor: pointer;

  :hover {
    background: ${colors.blue200};
    transform: scale(1.05);
  }

  :active {
    background: ${colors.blue100};
  }

  @media screen and (max-width: 530px) {
    padding: 16px 40px;
    font-size: ${fontSize.p};
  }
`;
