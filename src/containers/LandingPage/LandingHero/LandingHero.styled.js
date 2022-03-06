import styled from "styled-components";
import { BlinkCursor } from "@/components";
import { colors, fontSize, fontWeight } from "@/_shared";

const titleColor = {
  light: colors.gray700,
  dark: colors.gray200,
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  height: 100vh;
  margin: auto;

  background: radial-gradient(
      101.82% 101.82% at 49.99% -1.82%,
      rgba(74, 131, 239, 0.1) 0%,
      rgba(74, 131, 239, 0.1) 0.01%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(
      235.93deg,
      rgba(207, 238, 255, 0.05) 0%,
      rgba(101, 201, 255, 0) 70.17%
    ),
    linear-gradient(
      133.3deg,
      rgba(87, 74, 239, 0.02) 0.83%,
      rgba(74, 131, 239, 0) 45.87%
    ),
    radial-gradient(
      34.08% 56.27% at 94.97% 3.42%,
      rgba(74, 131, 239, 0.02) 0%,
      rgba(74, 131, 239, 0) 100%
    );
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 240px 0 0 20px;
  z-index: 2;

  @media screen and (max-width: 530px) {
    padding: 180px 0 0 20px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 6rem;

  font-size: calc(62rem / 16);
  font-weight: ${fontWeight.bold};
  color: ${(props) => titleColor[props.theme]};
  text-align: center;
  line-height: calc(80 / 62);

  transition: 0.3s;

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.h2};
    line-height: calc(72 / 62);
  }
`;

export const Cursor = styled(BlinkCursor)`
  color: ${colors.blueOpacity300};
  font-size: calc(68rem / 16);

  @media screen and (max-width: 530px) {
    font-size: calc(40rem / 16);
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

export const ScrollSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  padding: 1rem;
  color: ${colors.gray500};

  @keyframes scrollAni {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  animation: scrollAni 1s infinite alternate;
`;
